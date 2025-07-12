const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ✅ Register Controller
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const normalizedEmail = email.toLowerCase().trim();
    console.log("📩 Registering:", normalizedEmail);

    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) {
      console.log("⚠️ Email already exists");
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    console.log("✅ Registration successful");

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("🔥 Register error:", err);
    res.status(500).json({ message: 'Registration failed' });
  }
};

// ✅ Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const normalizedEmail = email.toLowerCase().trim();
    console.log("🔐 Login attempt for:", normalizedEmail);

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      console.log("❌ User not found");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log("✅ User found:", user.email);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Password does not match");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    console.log("✅ Login successful, sending token");

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("🔥 Login error:", err);
    res.status(500).json({ message: 'Login failed' });
  }
};

module.exports = { register, login };

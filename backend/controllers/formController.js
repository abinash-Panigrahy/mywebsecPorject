const Requirement = require('../models/Requirement');

const submitForm = async (req, res) => {
  const { name, email, requirement } = req.body;
  const userId = req.user.id;

  try {
    const form = await Requirement.create({ name, email, requirement, userId });
    res.status(201).json({ message: 'Form submitted successfully', form });
  } catch (err) {
    res.status(500).json({ message: 'Form submission failed' });
  }
};

module.exports = { submitForm };

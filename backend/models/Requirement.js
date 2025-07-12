const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  requirement: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Requirement', requirementSchema);

const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/formController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/submit', authMiddleware, submitForm);

module.exports = router;

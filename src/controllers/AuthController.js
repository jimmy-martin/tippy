const express = require('express');
const router = express.Router();
const { internalServerError, unauthorizedError } = require('../utils/error');

const AuthService = require('../services/AuthService');

router.post('/login', async (req, res) => {
  try {
    const admin = await AuthService.login(req.body);

    if (!admin) {
      return unauthorizedError(res, 'Unauthorized');
    }

    const token = AuthService.generateToken(admin);
    return res.status(200).json({ ...admin, token });
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

module.exports = router;

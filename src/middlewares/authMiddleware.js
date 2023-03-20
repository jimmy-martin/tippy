const AuthService = require('../services/authService');
const { unauthorizedError } = require('../utils/error');

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return unauthorizedError(res, 'Missing authorization header');
  }

  try {
    const token = req.headers.authorization;
    const decoded = AuthService.decodeToken(token);
    const adminId = decoded.id;

    if (!adminId) {
      return unauthorizedError(res, 'Unauthorized');
    }

    req.auth = { id_admin: adminId };

    return next();
  } catch (error) {
    return unauthorizedError(res, error.message);
  }
};

module.exports = authMiddleware;

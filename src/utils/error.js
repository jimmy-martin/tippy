const defaultError = (res, statusCode, message) => {
  res.status(statusCode).json({ error: message });
};

module.exports = {
  notFoundError: (res, message) => {
    defaultError(res, 404, message);
  },
  internalServerError: (res, message) => {
    defaultError(res, 500, message);
  },
  unauthorizedError: (res, message) => {
    defaultError(res, 401, message);
  },
};

const Auth = require('../models/Auth');

module.exports = {
  login: async (data) => await Auth.login(data),
  generateToken: (data) => Auth.generateToken(data),
  decodeToken: (token) => Auth.decodeToken(token),
};

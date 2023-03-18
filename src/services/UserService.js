const User = require('../models/User');

module.exports = {
  findAll: async () => await User.findMany(),
  find: async (id) => await User.findOne(id),
  create: async (data) => await User.create(data),
  update: async (id, data) => await User.update(id, data),
  delete: async (id) => await User.delete(id),
};

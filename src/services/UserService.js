const User = require('../models/User');

module.exports = {
  findAll: async () => await User.findMany(),

  findAllKitchen: async () => await User.findManyKitchen(),

  findAllService: async () => await User.findManyService(),

  find: async (id) => await User.findOne(id),

  create: async (data) => await User.create(data),

  update: async (id, data) => await User.update(id, data),

  delete: async (id) => await User.delete(id),

  setInactive: async (id) => await User.setInactive(id),
};

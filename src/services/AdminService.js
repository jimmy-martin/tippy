const Admin = require('../models/Admin');

module.exports = {
  findAll: async () => await Admin.findMany(),
  find: async (id) => await Admin.findOne(id),
  create: async (data) => await Admin.create(data),
  update: async (id, data) => await Admin.update(id, data),
  delete: async (id) => await Admin.delete(id),
};

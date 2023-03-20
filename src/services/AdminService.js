const Admin = require('../models/Admin');

module.exports = {
  findAll: async () => await Admin.findMany(),

  find: async (id) => await Admin.findOne(id),

  update: async (id, data) => await Admin.update(id, data),
};

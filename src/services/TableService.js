const Table = require('../models/Table');

module.exports = {
  findAll: async () => await Table.findMany(),
  find: async (id) => await Table.findOne(id),
  create: async (data) => await Table.create(data),
  update: async (id, data) => await Table.update(id, data),
  delete: async (id) => await Table.delete(id),
};

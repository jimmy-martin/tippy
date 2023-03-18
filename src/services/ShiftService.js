const Shift = require('../models/Shift');

module.exports = {
  findAll: async () => await Shift.findMany(),
  find: async (id) => await Shift.findOne(id),
  create: async (data) => await Shift.create(data),
  update: async (id, data) => await Shift.update(id, data),
  delete: async (id) => await Shift.delete(id),
};

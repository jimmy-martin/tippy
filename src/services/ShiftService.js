const Shift = require('../models/Shift');

module.exports = {
  findAll: async () => await Shift.findMany(),

  find: async (id) => await Shift.findOne(id),

  create: async (data) => await Shift.create(data),

  addUser: async (shiftId, userId) => await Shift.addUser(shiftId, userId),

  removeUser: async (shiftId, userId) =>
    await Shift.removeUser(shiftId, userId),

  update: async (id, data) => await Shift.update(id, data),

  delete: async (id) => await Shift.delete(id),
};

const Tip = require('../models/Tip');

module.exports = {
  create: async (data) => await Tip.create(data),
  update: async (id, data) => await Tip.update(id, data),
};

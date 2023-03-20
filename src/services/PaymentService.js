const Payment = require('../models/Payment');

module.exports = {
  payShift: async (shiftId) => await Payment.payShift(shiftId),
  payUser: async (userId, amount) => await Payment.payUser(userId, amount),
};

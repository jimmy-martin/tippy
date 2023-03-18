const prisma = require('../config/prismaClient');

module.exports = {
  findMany: () => prisma.shift.findMany(),
  findOne: (id) => prisma.shift.findOne({ where: { id } }),
  create: (data) => prisma.shift.create({ data }),
  update: (id, data) => prisma.shift.update({ where: { id }, data }),
  delete: (id) => prisma.shift.delete({ where: { id } }),
};

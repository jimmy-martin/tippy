const prisma = require('../config/prismaClient');

module.exports = {
  findMany: () => prisma.table.findMany(),
  findOne: (id) => prisma.table.findOne({ where: { id } }),
  create: (data) => prisma.table.create({ data }),
  update: (id, data) => prisma.table.update({ where: { id }, data }),
  delete: (id) => prisma.table.delete({ where: { id } }),
};

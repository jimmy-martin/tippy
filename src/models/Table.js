const prisma = require('../config/prismaClient');

module.exports = {
  findMany: () => prisma.table.findMany(),

  findOne: (id) =>
    prisma.table.findUniqueOrThrow({ where: { id: Number(id) } }),

  create: (data) => prisma.table.create({ data }),

  update: (id, data) =>
    prisma.table.update({ where: { id: Number(id) }, data }),

  delete: (id) => prisma.table.delete({ where: { id: Number(id) } }),
};

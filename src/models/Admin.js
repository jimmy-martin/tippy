const prisma = require('../config/prismaClient');

module.exports = {
  findMany: () => prisma.admin.findMany(),
  findOne: (id) => prisma.admin.findOne({ where: { id } }),
  create: (data) => prisma.admin.create({ data }),
  update: (id, data) => prisma.admin.update({ where: { id }, data }),
  delete: (id) => prisma.admin.delete({ where: { id } }),
};

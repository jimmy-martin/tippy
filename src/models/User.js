const prisma = require('../config/prismaClient');

module.exports = {
  findMany: () => prisma.user.findMany(),
  findOne: (id) => prisma.user.findOne({ where: { id } }),
  create: (data) => prisma.user.create({ data }),
  update: (id, data) => prisma.user.update({ where: { id }, data }),
  delete: (id) => prisma.user.delete({ where: { id } }),
};

const prisma = require('../config/prismaClient');

module.exports = {
  findMany: () => prisma.user.findMany(),

  findManyKitchen: () => prisma.user.findMany({ where: { status: false } }),

  findManyService: () => prisma.user.findMany({ where: { status: true } }),

  findOne: (id) => prisma.user.findUniqueOrThrow({ where: { id: Number(id) } }),

  create: (data) => {
    let { status, ...rest } = data;
    if (status === '0') {
      status = false;
    } else {
      status = true;
    }
    return prisma.user.create({ data: { ...rest, status } });
  },

  update: (id, data) => {
    let { status, ...rest } = data;
    if (status === '0') {
      status = false;
    } else {
      status = true;
    }
    return prisma.user.update({
      where: { id: Number(id) },
      data: { ...rest, status },
    });
  },

  delete: (id) => prisma.user.delete({ where: { id: Number(id) } }),

  setInactive: (id) =>
    prisma.user.update({
      where: { id: Number(id) },
      data: { firstname: 'Unknown', lastname: 'User', active: false },
    }),
};

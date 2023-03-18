const prisma = require('../config/prismaClient');

module.exports = {
  findMany: () => prisma.shift.findMany(),

  findOne: (id) => {
    return prisma.shift.findUniqueOrThrow({
      where: { id: Number(id) },
      include: {
        _count: { select: { users: true } },
        users: true,
      },
    });
  },

  create: (data) => {
    let { type } = data;
    if (type === '0') {
      type = false;
    } else {
      type = true;
    }
    return prisma.shift.create({ data: { type } });
  },

  addUser: (shiftId, userId) => {
    return prisma.shift.update({
      where: { id: Number(shiftId) },
      data: {
        users: {
          connect: { id: Number(userId) },
        },
      },
      include: {
        users: true,
      },
    });
  },

  removeUser: (shiftId, userId) => {
    return prisma.shift.update({
      where: { id: Number(shiftId) },
      data: {
        users: {
          disconnect: { id: Number(userId) },
        },
      },
      include: {
        users: true,
      },
    });
  },

  update: (id, data) => {
    let { type } = data;
    if (type === '0') {
      type = false;
    } else {
      type = true;
    }
    return prisma.shift.update({ where: { id: Number(id) }, data: { type } });
  },

  delete: (id) => prisma.shift.delete({ where: { id: Number(id) } }),
};

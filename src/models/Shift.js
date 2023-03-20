const prisma = require('../config/prismaClient');

module.exports = {
  findMany: () => prisma.shift.findMany(),

  findOne: (id) => {
    return prisma.shift.findUniqueOrThrow({
      where: { id: Number(id) },
      include: {
        _count: { select: { users: true, tips: true } },
        users: true,
        tips: {
          orderBy: { created_at: 'desc' },
        },
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

  findTips: (id) => {
    return prisma.tip.findMany({
      where: { id_shift: Number(id) },
      orderBy: { created_at: 'desc' },
    });
  },

  findUsers: (id) => {
    return prisma.user.findMany({
      where: { shifts: { some: { id: Number(id) } } },
    });
  },

  getTotalTipsAmount: (id) => {
    return prisma.tip.aggregate({
      where: { id_shift: Number(id) },
      _sum: { amount: true },
    });
  },

  close: (id) => {
    return prisma.shift.update({
      where: { id: Number(id) },
      data: { is_closed: true },
    });
  },

  getPeriodStats: async (start, end) => {
    const shifts = await prisma.shift.findMany({
      where: {
        created_at: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      include: {
        tips: true,
      },
    });

    const totalTipsAmount = shifts.reduce((acc, shift) => {
      return acc + shift.tips.reduce((acc, tip) => acc + tip.amount, 0);
    }, 0);

    const totalTipsCount = shifts.reduce((acc, shift) => {
      return acc + shift.tips.length;
    }, 0);

    const totalShiftsCount = shifts.length;

    const propetyNames = {
      id: true,
      amount: true,
      created_at: true,
      modified_at: true,
      id_table: true,
      id_shift: true,
    };

    const stats = await prisma.tip.aggregate({
      where: {
        created_at: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      _max: propetyNames,
      _min: propetyNames,
      _avg: { amount: true },
    });

    return {
      totalTipsAmount,
      totalTipsCount,
      totalShiftsCount,
      highestTip: stats._max,
      lowestTip: stats._min,
      averageTip: stats._avg,
    };
  },
};

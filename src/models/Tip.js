const prisma = require('../config/prismaClient');

module.exports = {
  create: async (data) => {
    let { table, shift, amount } = data;

    table = await prisma.table.findUniqueOrThrow({
      where: { id: Number(table) },
    });

    return prisma.tip.create({
      data: {
        table: {
          connect: { id: table.id },
        },
        shift: {
          connect: { id: Number(shift) },
        },
        amount: Number(amount),
      },
    });
  },

  update: async (id, data) => {
    return prisma.tip.update({
      where: { id: Number(id) },
      data: {
        amount: Number(data.amount),
      },
    });
  },
};

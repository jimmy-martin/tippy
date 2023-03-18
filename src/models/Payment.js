const prisma = require('../config/prismaClient');
const { getTotalTipsAmount } = require('./Shift');

module.exports = {
  payShift: async (shiftId) => {
    const shift = await prisma.shift.findUniqueOrThrow({
      where: { id: Number(shiftId) },
    });

    const users = await prisma.user.findMany({
      where: { shifts: { some: { id: shift.id } } },
    });

    const totalTipsAmount = await getTotalTipsAmount(shift.id);
    const amountPerUser = totalTipsAmount._sum.amount / users.length;

    const payments = await Promise.all(
      users.map(async (user) => {
        const payment = await prisma.payment.create({
          data: {
            amount: amountPerUser,
            user: { connect: { id: user.id } },
          },
        });
        await prisma.user.update({
          where: { id: user.id },
          data: {
            balance: {
              increment: amountPerUser,
            },
          },
        });
        return payment;
      })
    );

    return payments;
  },
  payUser: async (userId, amount) => {
    const payment = await prisma.payment.create({
      data: {
        amount: Number(amount),
        user: { connect: { id: Number(userId) } },
      },
    });
    await prisma.user.update({
      where: { id: Number(userId) },
      data: {
        balance: {
          increment: Number(amount),
        },
      },
    });
    return payment;
  },
};

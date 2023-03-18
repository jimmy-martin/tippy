const prisma = require('../config/prismaClient');
const { exclude } = require('../utils/exclude');

module.exports = {
  findMany: async () => {
    const admins = await prisma.admin.findMany();
    return admins.map((admin) => exclude(admin, ['pincode']));
  },

  findOne: async (id) => {
    const admin = await prisma.admin.findUniqueOrThrow({
      where: { id: Number(id) },
    });
    return exclude(admin, ['pincode']);
  },

  create: async (data) => {
    const admin = await prisma.admin.create({ data });
    return exclude(admin, ['pincode']);
  },

  update: async (id, data) => {
    const admin = await prisma.admin.update({
      where: { id: Number(id) },
      data,
    });
    return exclude(admin, ['pincode']);
  },

  delete: async (id) => {
    const admin = await prisma.admin.delete({ where: { id: Number(id) } });
    return exclude(admin, ['pincode']);
  },
};

const prisma = require('../config/prismaClient');
const { exclude } = require('../utils/exclude');
const jwt = require('jsonwebtoken');

module.exports = {
  login: async (data) => {
    const admin = await prisma.admin.findFirst({
      where: { pincode: data.pincode },
    });
    return exclude(admin, ['pincode']);
  },

  generateToken: async (data) => {
    return jwt.sign(
      {
        id: data.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
  },

  decodeToken: (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
  },
};

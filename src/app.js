const express = require('express');
const prisma = require('./config/prismaClient');
const authMiddleware = require('./middlewares/authMiddleware');
const { notFoundError } = require('./utils/error');
const cors = require('cors');

const app = express();

const main = async () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/users', authMiddleware, require('./controllers/UserController'));
  app.use('/admins', authMiddleware, require('./controllers/AdminController'));
  app.use('/tables', require('./controllers/TableController'));
  app.use('/shifts', require('./controllers/ShiftController'));
  app.use('/tips', require('./controllers/TipController'));
  app.use('/auth', require('./controllers/AuthController'));

  app.use('/*', (req, res) => notFoundError(res, 'Route Not found'));

  app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

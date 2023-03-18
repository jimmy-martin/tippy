const express = require('express');
const prisma = require('./config/prismaClient');
const { notFoundError } = require('./utils/error');

const app = express();

const main = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/users', require('./controllers/UserController'));
  app.use('/admins', require('./controllers/AdminController'));
  app.use('/tables', require('./controllers/TableController'));
  app.use('/shifts', require('./controllers/ShiftController'));

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

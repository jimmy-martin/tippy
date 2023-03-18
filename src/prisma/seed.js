const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { faker } = require('@faker-js/faker');

async function main() {
  await prisma.admin.create({
    data: {
      pincode: '1234',
    },
  });

  const tables = [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }];
  await prisma.table.createMany({
    data: tables,
  });
  console.table(tables);

  const users = [
    {
      firstname: faker.name.firstName('male'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
      balance: faker.datatype.number({ min: 0, max: 100 }),
    },
    {
      firstname: faker.name.firstName('male'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
      balance: faker.datatype.number({ min: 0, max: 100 }),
    },
    {
      firstname: faker.name.firstName('male'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
      balance: faker.datatype.number({ min: 0, max: 100 }),
    },
    {
      firstname: faker.name.firstName('male'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
    },
    {
      firstname: faker.name.firstName('male'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
    },
    {
      firstname: faker.name.firstName('female'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
      balance: faker.datatype.number({ min: 0, max: 100 }),
    },
    {
      firstname: faker.name.firstName('female'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
    },
    {
      firstname: faker.name.firstName('female'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
    },
    {
      firstname: faker.name.firstName('female'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
    },
    {
      firstname: faker.name.firstName('female'),
      lastname: faker.name.lastName(),
      status: faker.datatype.boolean(),
      balance: faker.datatype.number({ min: 0, max: 100 }),
    },
  ];

  await prisma.user.createMany({
    data: users,
  });
  console.table(users);

  const shifts = [{ type: false }, { type: true, is_closed: true }];
  await prisma.shift.createMany({
    data: shifts,
  });
  console.table(shifts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

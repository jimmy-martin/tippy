const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');

const swaggerOptions = {
  explorer: true,
};

const file = fs.readFileSync('./swagger.yml', 'utf8');
const swaggerDocument = YAML.parse(file);

module.exports = {
  swaggerOptions,
  swaggerUi,
  swaggerDocument,
};

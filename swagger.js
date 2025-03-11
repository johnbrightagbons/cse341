const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API for Contacts',
    description: 'Contacts API Documentation',
  },
  host: 'localhost:3000',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Generate Swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
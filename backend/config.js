// config.js

require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'bhavik41',
  // Other configuration variables can be added here
};

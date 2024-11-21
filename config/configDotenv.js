import dotenv from 'dotenv';

const configDotenv = () => {
  dotenv.config();

  if (!process.env.NODE_ENV) {
    console.error('No se encontró el archivo .env');
    process.exit(1);
  }
};

module.exports = { configDotenv };

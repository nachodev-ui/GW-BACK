import dotenv from 'dotenv';
dotenv.config();

export const khipuConfig = {
    apiUrl: 'https://payment-api.khipu.com/v3',
    apiKey: process.env.KHIPU_API_KEY,
};
  
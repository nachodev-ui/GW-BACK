import axios from 'axios';

// Configuración de la API de Transbank
const transbankAPI = axios.create({
  baseURL: process.env.TBK_BASE_URL || 'https://webpay3gint.transbank.cl', // URL base para el entorno de integración
  headers: {
    'Tbk-Api-Key-Id': process.env.TBK_API_KEY_ID,          
    'Tbk-Api-Key-Secret': process.env.TBK_API_KEY_SECRET,      
    'Content-Type': 'application/json',  
  },
});

export default transbankAPI;

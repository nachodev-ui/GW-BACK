import axios from 'axios';

const apiUrl = 'https://payment-api.khipu.com/v3/payments';
const apiKey = 'ca7132e9-7df3-45ce-9443-3f29fc5f12f5'; // Reemplaza esto con tu clave

const testPayment = async () => {
  try {
    const response = await axios.post(
      apiUrl,
      {
        amount: 1000,
        currency: 'CLP',
        subject: 'Cobro de prueba',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        }
      }
    );

    console.log('Respuesta:', response.data);
  } catch (error) {
    console.error('Error en el pago:', error.response?.data || error.message);
  }
};

testPayment();

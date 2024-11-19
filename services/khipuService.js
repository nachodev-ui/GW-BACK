import fetch from 'node-fetch';
import { khipuConfig } from '../config/khipuConfig.js'

export const createPayment = async ({ amount, currency, subject }) => {
  try {
    const response = await fetch(`${khipuConfig.apiUrl}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': khipuConfig.apiKey,
      },
      body: JSON.stringify({
        amount,
        currency,
        subject,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error en la creación del pago: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear el pago:', error);
    throw error;
  }
};

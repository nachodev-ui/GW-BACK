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

export const getPayment = async (paymentId) => {
  try {
    const response = await fetch(`${khipuConfig.apiUrl}/payments/${paymentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': khipuConfig.apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener el pago: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el pago:', error);
    throw error;
  }
}

export const deletePayment = async (paymentId) => {
  try {
    const response = await fetch(`${khipuConfig.apiUrl}/payments/${paymentId}`, {
      method: 'DELETE',
      headers: {  
        'Content-Type': 'application/json',
        'x-api-key': khipuConfig.apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error al eliminar el pago: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al eliminar el pago:', error);
    throw error;
  }
}

export const refundPayment = async (paymentId) => {
  try {
    const response = await fetch(`${khipuConfig.apiUrl}/payments/${paymentId}/refunds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': khipuConfig.apiKey,
      },
      body: JSON.stringify({
        reason: 'Reembolso por error en el pago',
      }),
    });

    if (!response.ok) {
      throw new Error(`Error al reembolsar el pago: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al reembolsar el pago:', error);
    throw error;
  }
}
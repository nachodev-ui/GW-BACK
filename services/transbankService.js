import transbankAPI from '../config/transbankConfig.js' 

export const tbkTransaction = async ({ buyOrder, sessionId, amount, returnUrl }) => {
  try {
    // Datos requeridos por la API de Transbank
    const payload = {
      buy_order: buyOrder,
      session_id: sessionId,
      amount,
      return_url: returnUrl,
    };

    // Realiza la solicitud POST a la API de Transbank
    const response = await transbankAPI.post('/rswebpaytransaction/api/webpay/v1.2/transactions', payload);

    // Retorna la respuesta
    return {
      token: response.data.token,
      url: response.data.url,
    };
  } catch (error) {
    console.error('Error al crear la transacción:', error.response?.data || error.message);
    throw new Error('No se pudo crear la transacción. Verifica las credenciales o los parámetros enviados.');
  }
};

export const getTbkTransaction = async (token) => {
  try {
    // Realiza la solicitud
    const
      response = await transbankAPI.get(`/rswebpaytransaction/api/webpay/v1.2/transactions/${token}`);

    // Retorna la respuesta
    return response.data;
  }
  catch (error) {
    console.error('Error al obtener la transacción:', error.response?.data || error.message);
    throw new Error('No se pudo obtener la transacción. Verifica el token enviado.');
  }
}

export const confirmTransactionService = async (token) => {
  try {
    // Realiza la solicitud
    const response = await transbankAPI.put(`/rswebpaytransaction/api/webpay/v1.2/transactions/${token}`);

    // Retorna la respuesta
    return response.data;
  } catch (error) {
    console.error('Error al confirmar la transacción:', error.response?.data || error.message);
    throw new Error('No se pudo confirmar la transacción. Verifica el token enviado.');
  }
}


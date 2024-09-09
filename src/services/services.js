import axios from 'axios';

const baseURL = "http://localhost:3000/memes"

export const getData = async () => {
  try {
    const response = await axios.get(baseURL);
    console.log('Datos recibidos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al hacer la petición GET:', error);
    throw error;
  } finally {
    console.log('Petición GET completada');
  }
};


export const postData = async (data) => {
  try {
    const response = await axios.post(baseURL, data);
    console.log('Respuesta del servidor:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al hacer la petición POST:', error);
    throw error;
  } finally {
    console.log('Petición POST completada');
  }
};

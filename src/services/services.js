// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // URL base del json-server
});


// Funciones CRUD
export const getMemes = async () => {
  const response = await api.get('/memes');
  return response.data;
};

export const createMeme = async (meme) => {
  const response = await api.post('/memes', meme);
  return response.data;
};

export const updateMeme = async (id, meme) => {
  const response = await api.put(`/memes/${id}`, meme);
  return response.data;
};

export const deleteMeme = async (id) => {
  await api.delete(`/memes/${id}`);
};








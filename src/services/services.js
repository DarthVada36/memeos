// Importa la biblioteca axios para realizar solicitudes HTTP
import axios from "axios";

// Define la URL base de la API para las operaciones con memes
const API_URL = "http://localhost:3000/memes";

// Función asincrónica para obtener todos los memes
export const getMemes = async () => {
  try {
    // Realiza una solicitud GET a la API
    const response = await axios.get(API_URL);
    // Devuelve los datos de la respuesta
    return response.data;
  } catch (error) {
    // Si ocurre un error, lo registra en la consola
    console.error("Error fetching memes:", error);
    // Lanza el error para que pueda ser manejado por el llamador
    throw error;
  }
};

// Función asincrónica para obtener un meme por su ID
export const getMemeById = async (id) => {
  try {
    // Realiza una solicitud GET a la API con el ID específico
    const response = await axios.get(`${API_URL}/${id}`);
    // Devuelve los datos de la respuesta
    return response.data;
  } catch (error) {
    // Si ocurre un error, lo registra en la consola
    console.error(`Error fetching meme with id ${id}:`, error);
    // Lanza el error para que pueda ser manejado por el llamador
    throw error;
  }
};

// Función asincrónica para crear un nuevo meme
export const createMeme = async (memeData) => {
  try {
    // Realiza una solicitud POST a la API con los datos del meme
    const response = await axios.post(API_URL, memeData);
    // Devuelve los datos de la respuesta
    return response.data;
  } catch (error) {
    // Si ocurre un error, lo registra en la consola
    console.error("Error creating meme:", error);
    // Lanza el error para que pueda ser manejado por el llamador
    throw error;
  }
};

// Función asincrónica para actualizar un meme existente
export const updateMeme = async (id, memeData) => {
  try {
    // Realiza una solicitud PUT a la API con el ID y los nuevos datos del meme
    const response = await axios.put(`${API_URL}/${id}`, memeData);
    // Devuelve los datos de la respuesta
    return response.data;
  } catch (error) {
    // Si ocurre un error, lo registra en la consola
    console.error(`Error updating meme with id ${id}:`, error);
    // Lanza el error para que pueda ser manejado por el llamador
    throw error;
  }
};

// Función asincrónica para eliminar un meme
export const deleteMeme = async (id) => {
  try {
    // Realiza una solicitud DELETE a la API con el ID del meme a eliminar
    const response = await axios.delete(`${API_URL}/${id}`);
    // Devuelve los datos de la respuesta
    return response.data;
  } catch (error) {
    // Si ocurre un error, lo registra en la consola
    console.error(`Error deleting meme with id ${id}:`, error);
    // Lanza el error para que pueda ser manejado por el llamador
    throw error;
  }
};

// Función asincrónica para subir una imagen a Cloudinary
export const subirImagenCloudinary = async (file) => {
  // Crea un objeto FormData para enviar el archivo
  const formData = new FormData();
  // Agrega el archivo al FormData
  formData.append("file", file);
  // Agrega el preset de carga de Cloudinary
  formData.append("upload_preset", "preset_memeos");

  try {
    // Realiza una solicitud POST a la API de Cloudinary con el FormData
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/duktvnmaw/image/upload`,
      formData,
    );
    // Devuelve la URL segura de la imagen subida
    return response.data.secure_url;
  } catch (error) {
    // Si ocurre un error, lo registra en la consola
    console.error("Error subiendo la imagen:", error);
    // Lanza el error para que pueda ser manejado por el llamador
    throw error;
  }
};

// Comentario explicativo sobre cómo usar la función de subir imagen
// const imageUrl = await uploadImageToCloudinary(imageFile);

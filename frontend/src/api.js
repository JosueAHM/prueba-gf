import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const getUsers = () => api.get('/users');


export const getUser = (id) => api.get(`/users/${id}`);

/**
 * Crear un nuevo usuario
 */
export const createUser = (data) => api.post('/users', data);

/**
 * Actualizar un usuario existente
 */
export const updateUser = (id, data) => api.put(`/users/${id}`, data);

/**
 * Eliminar un usuario
 */
export const deleteUser = (id) => api.delete(`/users/${id}`);

export default api;

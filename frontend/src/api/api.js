import axios from 'axios';
import API_BASE_URL from './config';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchInitMessage = async () => {
    const response = await api.get('/api/message/init');
    return response.data;
};

export const updateMessage = async (data) => {
    const response = await api.post('/api/message/update', data);
    return response.data;
};

export default api;

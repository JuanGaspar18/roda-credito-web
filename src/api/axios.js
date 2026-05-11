import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json"
    }
});

// opcional: interceptores
api.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error.response?.data || error);
    }
);

export default api;
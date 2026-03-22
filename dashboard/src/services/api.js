import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});

// 🔹 Request interceptor (for future auth, logging)
api.interceptors.request.use(
  (config) => {
    // You can add token here later
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response interceptor (global error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
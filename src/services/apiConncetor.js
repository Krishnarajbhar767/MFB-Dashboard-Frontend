// src/api/axiosInstance.js
import axios from "axios";
// Remove dotenv if you're in a client-side React project that handles env variables
import Cookies from "js-cookie";

// Create a new Axios instance with default settings
const axiosInstance = axios.create({
    baseURL:
        import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:5001/api",
    timeout: 10000,
});

// Add a request interceptor to attach a token if available
axiosInstance.interceptors.request.use(
    (config) => {
        const token =
            Cookies.get("token") ||
            Cookies.get("authenticationToken") ||
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTcwODdkNjhhYTNmNGViYzFlYTFjYyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczOTYwOTExOCwiZXhwIjoxNzM5Njk1NTE4fQ.zpymsB9s7DGmGziPNdspqCNKynJ-co6RIwj0YWdyo68"; // Fallback token for development
        console.log("Verifying is Token Is Valid Or Not...", token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Optional: Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default axiosInstance;

// Utility function to make API calls using the configured axiosInstance
export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method,
        url: process.env.REACT_APP_API_BASE_URL + url,
        data: bodyData || null,
        headers: headers || null,
        params: params || null,
    });
};

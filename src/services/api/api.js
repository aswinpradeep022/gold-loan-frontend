import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

// OPTIONAL: basic response error logging
api.interceptors.response.use(
  (responseFromServer) => responseFromServer,
  (errorFromServer) => {
    console.error(
      "API error:",
      errorFromServer?.response || errorFromServer?.message
    );
    return Promise.reject(errorFromServer);
  }
);

export default api;

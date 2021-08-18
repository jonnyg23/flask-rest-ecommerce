import axios from "axios";

export const backendApi = axios.create({
  baseURL: process.env.BACKEND_API_BASE_URL,
});

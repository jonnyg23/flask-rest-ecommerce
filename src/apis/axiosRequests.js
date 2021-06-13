import axios from "axios";

process.env.backendEndpoint = "http://127.0.0.1:5000";

export const backendApi = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

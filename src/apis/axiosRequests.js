import axios from "axios";

export const backendApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

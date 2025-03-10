import axios from "axios";
// Set your axios Instance here
export const axiosInstance = axios.create({
  // Set your base URL here
  baseURL: "http://localhost:3000/api",
});

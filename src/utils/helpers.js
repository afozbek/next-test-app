import axios from "axios";

export const axiosInstance = new axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

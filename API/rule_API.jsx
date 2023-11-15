import axios from "axios";

const api = axios.create({
  baseURL: "https://back-senpai-project.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

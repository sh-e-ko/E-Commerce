import axios from "axios";

export const user = axios.create({
    baseURL: "http://localhost:5000/api",
})
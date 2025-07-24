import axios from "axios";

export const products = axios.create({
    baseURL: "http://localhost:5000/api",
})
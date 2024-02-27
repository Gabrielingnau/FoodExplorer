import axios from "axios"

export const api = axios.create({
    baseURL: "https://foodbackend-1ee0.onrender.com/"
})
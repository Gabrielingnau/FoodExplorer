import axios from "axios"

export const api = axios.create({
    baseURL: "https://backendfood-1fd2.onrender.com"
})
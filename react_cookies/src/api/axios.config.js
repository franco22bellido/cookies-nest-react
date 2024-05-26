import axios from "axios";

const _instance = axios.create({
     baseURL: 'https://cookies-nest.onrender.com',
     withCredentials: true
})

export default _instance
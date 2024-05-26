import axios from "axios";

const instance = axios.create({
     withCredentials: true,
     baseURL: 'https://cookies-nest-react.onrender.com'
})

export default instance;
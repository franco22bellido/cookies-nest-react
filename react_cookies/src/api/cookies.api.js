import axios from './axios.config'

export const setCookies = async ()=> {
    return await axios.post('/')
}
export const getCookies = async ()=> {
    return await axios.get('/')
}
export const navegar = async ()=> {
    return await axios.get('/navegar')
}
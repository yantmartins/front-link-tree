import axios from "axios";

export const AxiosClient = axios.create({
    baseURL: 'https://fabrica.lambdatech.com.br'
})


export default AxiosClient
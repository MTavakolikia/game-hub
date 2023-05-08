import axios, { AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd4de9eeff1194ab8bef4cfad87fb430c'
    }
})
export interface FetchResponse<T> {
    count: number;
    results: T[];
}
class APIClient<T>{
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}
export default APIClient;

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class Axios {
    static Instance: Axios = new Axios();
    public axiosInstance: AxiosInstance;

    constructor() {
        if (Axios.Instance) {
            throw new Error("Use Axios.getInstance");
        } else {
            this.axiosInstance = axios.create({ baseURL: "http://localhost:8888" });
        }
    }

    /**
     * getInstance
     */
    public static getInstance() {
        return Axios.Instance;
    }

    public fetch(url: string, params?: AxiosRequestConfig) {
        return this.axiosInstance(url, params);
    }
}

export default Axios.getInstance();

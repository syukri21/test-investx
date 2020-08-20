import { AxiosRequestConfig } from "axios";

import Axios from "./axios";

class Api {
    static Instance: Api = new Api();
    private http: typeof Axios;

    constructor() {
        if (Api.Instance) {
            throw new Error("Use get instance");
        } else {
            this.http = Axios;
        }
    }

    static getInstance() {
        return Api.Instance;
    }

    public fetch(url: string, params: AxiosRequestConfig) {
        return this.http?.fetch(url, params);
    }

    public fetcher(url: string, params?: AxiosRequestConfig) {
        return this.http?.fetch(url, params).then((r) => r.data);
    }
}
export default Api.getInstance();

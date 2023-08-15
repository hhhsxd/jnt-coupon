import axios , { AxiosInstance, AxiosResponse,InternalAxiosRequestConfig} from "axios"

 export interface ResponseData<T>{
    code: number
    data?: T
    message: string
}

export  const Instance:AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
});
 
// axios实例拦截响应
Instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    // 请求失败
    (error: any) => {
        return error;
    }
);
 
// axios实例拦截请求
Instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token=sessionStorage.getItem('token')
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config;
    },
    (error:any) => {
        return Promise.reject(error);
    }
)



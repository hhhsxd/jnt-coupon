import {Instance , ResponseData }  from "./instance";
import { AxiosPromise } from "axios";

export const login=(
    phone:string,
    pwd:string
    ):AxiosPromise<ResponseData<any>>=>{
        return Instance.post(
            '/tour/auth/login',
           {phone,pwd}
        )
    }

    export const sign=(
        phone:string,
        pwd:string):AxiosPromise<ResponseData<any>>=>{
            return Instance.post(
                '/tour/auth/sign',
                {phone,pwd}
            )
    }

  
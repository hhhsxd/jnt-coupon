import {Instance , ResponseData }  from "./instance";
import { AxiosPromise } from "axios";

export const configNameAPI=(name:string,id:number):AxiosPromise<ResponseData<any>>=>{
    return Instance.post('/tour/person/name',{
        name,id
    })
}
export const configGenderAPI=(sex:number,id:number):AxiosPromise<ResponseData<any>>=>{
    return Instance.post('/tour/person/gender',{
        sex,id
    })
}

export const reflash=(id:number):AxiosPromise<ResponseData<any>>=>{
    return Instance.get(
        '/tour/user',{
            params: {id}
        }
    )
}
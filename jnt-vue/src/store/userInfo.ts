import { defineStore } from "pinia";
import {login} from '@/common/auth'
import {ref} from "vue"
import {reflash} from '@/common/person-config'
export interface UserInfo {
    id:number;
    user_name:string;
    user_headpic:string;
    user_phone:string;
    user_sex:number;
}
export const useUserStore=defineStore('user',()=>{
    const userinfo=ref<UserInfo>()
    const  getUserInfo=async (phone:string,pwd:string):Promise<UserInfo| undefined>=>{
        try{
             const res= await login(phone,pwd)
             console.log(res)
             userinfo.value=res.data.data[0]
               const token=res.headers.authorization
             sessionStorage.setItem('token',token)
             return userinfo.value
           
        }catch(err){
             console.log(err);
             throw(err)
        }
      
    }
    const reGet=async (ID:number):Promise<UserInfo |undefined>=>{
        try{
            const res=await reflash(ID)
            console.log(res);
            userinfo.value=res.data.data
            return userinfo.value
        }catch(err){
            throw(err)
        }
    }
    
    return {userinfo,getUserInfo,reGet}
}, {
    persist: {
      enabled: true
    },
  })

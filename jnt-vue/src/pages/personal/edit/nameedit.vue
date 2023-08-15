<script setup lang="ts">
import {ref} from 'vue'
import {configNameAPI} from "@/common/person-config"
import { useUserStore } from '@/store/userInfo';
import router from '@/router/router';
const userinfoStore=useUserStore()
console.log(userinfoStore.userinfo?.id!);

const id=userinfoStore.userinfo?.id!
const name=ref<string>('')
const change_name=async ()=>{
    try{
    const res=await configNameAPI(name.value,id)
        if(res){
            console.log(res);
            // userinfoStore.reGet(id)
            router.push('/person-config')
            
        }else{
            console.log('没有'+res);
            
        }
    }catch(err){
        console.log(err);
        
    }

}
</script>
<template>
    <div>
       <van-nav-bar title="修改用户名" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
       <form action="">
        <div class="change-box">
            <span>新用户名：</span>
            <input type="text" v-model="name">
        </div>
        <input type="button" class="sub" value="确认" @click="change_name">
    </form>
    </div>
</template>

<style lang='scss' scoped>
.change-box{
    margin: 20px auto;
    width: 80%;
    height: 40px;
    line-height: 38px;
    border-bottom: 2px solid #ffc0cb;
    text-align: center;
    font-size: 17px;
    input{
        border:none;
        line-height: 38px;
    }
}
.sub{
    display: block;
    margin: 10px auto;
    background-color : rgb(241, 225, 227);
    border:1px solid rgb(185, 105, 118);
    width: 50px;
    height: 30px;
    color: rgb(47, 53, 71);
}

</style>
<script setup lang="ts"> 
import {useRouter} from 'vue-router'
import {ref} from 'vue'
import { validatorPhone,validatorpassword } from '@/utils/validator';
import { useUserStore } from '@/store/userInfo';
import { onMounted } from 'vue';
const userinfoStore=useUserStore()
const router=useRouter()
const state=ref({
    phone:'',
    pwd:''
})
onMounted(()=>{
    const token=sessionStorage.getItem('token')
    if(token){
        sessionStorage.clear()
    }
})
function submitVaild(e:Event){
    e.preventDefault();
    
    if(!validatorPhone(state.value.phone)){
        console.log(state.value.phone);
        alert('手机号码格式不正确，请重新输入')
        return
    }
    if(!validatorpassword(state.value.pwd)){
        alert('密码需要6-18位')
        return
    }   
     userinfoStore.getUserInfo(state.value.phone,state.value.pwd)
    .then(res=>{
        console.log(res);
        if(res.id){
        router.push({name:'Main'})
        }else{
            alert(res)
        }
    })
    .catch(err=>{
        console.log(err)
        alert('账号或密码错误，请重新输入')
    })
}
</script>
<template>
    <div class="login-wrapper">
        <form @submit="submitVaild">
   <div>
            <i class="iconfont icon-face"></i>
            <input type="tel" placeholder="请输入手机号" maxlength="11" v-model.lazy.trim="state.phone">
            
        </div>
        <div>
            <i class="iconfont icon-lock"></i>
            <input type="password"  placeholder="请输入密码" v-model.lazy.trim="state.pwd">
        </div>
        <div class="link-section">
               <input type="submit" value="登录">
        <router-link to="/getphonecode">忘记密码</router-link>
        </div>
    
        </form>
     
    </div>
</template>

<style lang='scss' scoped>
.link-section{
    position: relative;
    
    a{
        position: absolute;
        right: 15px;
        font-size: 14px;
    }
}

</style>
@/common/auth
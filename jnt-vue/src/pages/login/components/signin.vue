<script setup lang="ts">
import { validatorPhone,validatorpassword } from '@/utils/validator';
import {sign} from "@/common/auth"
import {ref} from "vue"
import router from '@/router/router';
const state=ref({
    phone:'',
    pwd:'',
    comfirmPwd:''
})
const submitSign=(e:Event)=>{
    e.preventDefault()
    if(!validatorPhone(state.value.phone)) {return alert('请输入正确的手机号！')}
    if(!validatorpassword(state.value.pwd)) {return alert('请输入6-18位密码！')}
    if(state.value.pwd!==state.value.comfirmPwd){ return alert('两次密码不一样哦，请重新输入')}
           sign(state.value.phone,state.value.pwd).then(res=>{
        console.log(res)
        alert('注册成功！')
        router.push('/login')
    }).catch(err=>{
        console.log(err);
        alert('注册失败，请稍后尝试！')
    })

        
    
}
</script>
<template>
    <div class="login-wrapper">
        <form @submit="submitSign">
            <div>
            <i class="iconfont icon-face"></i>
            <input type="tel" 
             placeholder="请输入手机号"
             maxlength="11"
             v-model.lazy.trim="state.phone">
            
        </div>
        <div>
            <i class="iconfont icon-lock"></i>
            <input type="password"  
            placeholder="请输入密码"
            v-model.lazy.trim="state.pwd">
        </div>
        <div>
            <i class="iconfont icon-lock"></i>
            <input type="password"  placeholder="确认密码"
            v-model.lazy.trim="state.comfirmPwd">
        </div>
        <input type="submit" value="注册">
        </form>
        
    </div>
</template>

<style lang='scss' scoped>


</style>

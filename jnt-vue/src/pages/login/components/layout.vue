<script setup lang="ts">

</script>
<template>
    <div class="login-tabbar">
      <div :class="{active:$route.path=='/login'}">
       <router-link to="/login">登录</router-link>
      </div>
      <div :class="{active:$route.path=='/login/signin'}">
       <router-link to="/login/signin">注册</router-link>
      </div>
    </div>
</template>

<style lang='scss' scoped>
 .login-tabbar{
    margin: 0 auto;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    div{
      width: 50%;
      text-align: center;
      line-height: 40px;
      &.active{
         border-bottom: 2px solid pink;
         transition: border-color 0.5s linear;
      }
    }
   
 }

</style>

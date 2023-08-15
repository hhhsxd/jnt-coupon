<script setup lang="ts">
import router from '@/router/router';

const showMine=()=>{
    const token=sessionStorage.getItem('token')
    if(token){
        router.push('/person')
    }else{
        router.push('/login')
    }
}
</script>
<template>
    <div>
        <van-tabbar route>
           <van-tabbar-item  to="/main">
            <van-icon  class="iconfont"  class-prefix="icon" name="qiaquan"></van-icon><span>全球</span></van-tabbar-item>
           <van-tabbar-item  @click="showMine" >
            <van-icon class="iconfont"  class-prefix="icon" name="wo"></van-icon><span>我的</span>
          </van-tabbar-item>
       </van-tabbar>
    </div>
</template>

<style lang='scss' scoped>


</style>

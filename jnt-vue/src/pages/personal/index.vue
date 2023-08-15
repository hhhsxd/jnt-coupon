<script setup lang="ts">
import Tabbar from "@/components/tabbar.vue"
import { useUserStore } from "@/store/userInfo";
const userInfo=useUserStore().userinfo
</script>
<template>
    <div class="container">
        <van-nav-bar title="个人中心" left-arrow @click-left="$router.go(-1)"/>
      <div class="wrapper">
        <router-link class="iconfont icon-shezhi" to="/person-config"></router-link>
        <div class="avatar">
            <img :src="userInfo.user_headpic" alt="">
        </div>
        <div class="number">13111111111</div>
      
        <div class="card-wallet"> 
              <h3>卡包</h3>
            <div>
                <img src="@/static/images/jnt.png" alt="">
                <span>银联优惠 (0)</span>
                <img src="@/static/images/downarrows.png" alt="">
            </div>
            <div>
                <img src="@/static/images/jnt.png" alt="">
                <span>银联优惠(0) </span>
                <img src="@/static/images/downarrows.png" alt="">
            </div>
            <div>
                <img src="@/static/images/jnt.png" alt="">
                <span>银联优惠 </span>
                <img src="@/static/images/downarrows.png" alt="">
            </div>
            <div>
                <img src="@/static/images/jnt.png" alt="">
                <span>银联优惠 </span>
                <img src="@/static/images/downarrows.png" alt="">
            </div>
        </div>
      </div>
     <Tabbar></Tabbar>
     

        
    </div>
</template>

<style lang='scss' scoped>

$top:60px;
.container{ 
      background-color:white;
       .wrapper{
        background: url(./images/minebg.png) no-repeat top/100%;
        width: 100%;
        height: 750px;
        position: relative;
        // overflow: hidden;
    .icon-shezhi{
        position: absolute;
        right: 0;
        font-size: 28px;
    }
    
   .avatar{
    text-align: center;
    // overflow: hidden;
    transform: translateY($top);
    img{
    width: 75px;
    height: 75px;
    border-radius: 38.5px;
    }
    }
.number{
    text-align: center;
    height: 26px;
    font-size:18px;
    transform: translateY($top);
    }
   
.card-wallet{
    margin: 60px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3{
        padding: 0 5px;
        line-height: 26px;
        border-left: 2px solid rgb(196, 196, 51);
    }
    &>div{
        margin-bottom: 20px;
        height: 50px;
        display: flex;
        align-items: center;
    }
    span{
        margin-left: 10px;
        font-size: 18px;
    }
    img{
        &:first-child{
             width: 100px;
             height: 50px;
        }
        &:last-child{
            position: absolute;
            right: 25px;
            height: 16px;
        }
       
    }
}
    
}
}


</style>

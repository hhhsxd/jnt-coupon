<script setup lang="ts">
import Tabbar from '@/components/tabbar.vue';
import News from "./news/layout.vue"

 </script>
<template>
    <div class="container">
       <van-nav-bar title="环球锦囊团" left-text="全球">
       </van-nav-bar>
       <div class="wrapper">
       <div>
       <img src="./images/taizilogo.png" alt="">
       </div>
       <div class="coupon">
        <div class="coupon-title">--全球热门--</div>
        <div class="coupon-store">
             <div>
            <img src="./images/taizilogo.png" alt="">
            <p>新罗免税店</p>
            <p>满200减100元</p>
        </div>
        <div>
            <img src="./images/taizilogo.png" alt="">
            <p>新罗免税店</p>
            <p>满200减100元</p>
        </div>
        <div>
            <img src="./images/taizilogo.png" alt="">
            <p>新罗免税店</p>
            <p>满200减100元</p>
        </div>
        <div>
            <img src="./images/taizilogo.png" alt="">
            <p>新罗免税店</p>
            <p>满200减100元</p>
        </div>
       </div>
       </div>
       <div class="see-more">
        <router-link to="/main/store-list">查看更多></router-link>
       </div>
        <div class="ad">
        <img src="./images/taizilogo.png" alt="">
       </div>
       <div class="news-type">
       <News></News>
       <router-view></router-view>
       </div>
       </div>
       <Tabbar></Tabbar>
    </div>
</template>

<style lang='scss' scoped>
.wrapper{
    margin: 20px 5%;
}
.coupon-title{
    text-align: center;
    font-size: 1.625rem;
}
.coupon-store{
    display: flex;
    flex-wrap: wrap;
    div{
        width: 50%;
     img{
        width: 100%;

     }
        p{
         &:first-child{
         font-size: .9375rem;
         
        }
        &:last-child{
            font-size: .75rem;
            color:grey;
        }  
        }
      
    }
}
.see-more{
    text-align: center;
    margin: .9375rem auto;
    // padding: 15px 10px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgb(172, 82, 97);
    border-radius: 15px;
    a{
        color:  rgb(172, 82, 97);
    }
}
</style>

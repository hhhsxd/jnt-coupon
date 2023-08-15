<script setup lang="ts">
import {useRoute} from "vue-router"
const route=useRoute()
</script>
<template>
    <div class="news-wrapper">
        <div :class="{active:$route.path=='/main'}">
       <router-link  to="/main">购物</router-link>
      </div>
      <div :class="{active:$route.path=='/main/news/tax'}">
       <router-link to="/main/news/tax">退税</router-link>
      </div>
    </div>
</template>

<style lang='scss' scoped>
.news-wrapper{
    height: 40px;
    line-height: 40px;
    display: flex; 
    justify-content: space-between;
    div{
        width: 50%;
        text-align: center;
    }
    .active{
        border-bottom: 2px solid hotpink;
    }

}

</style>

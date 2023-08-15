<script setup lang="ts">
</script>
<template>
    <div class="container">
        <van-nav-bar title="全球优惠"  left-arrow @click-left="$router.go(-1)"/>
        <div class="select-bar">
            <span class="region" @click="show-list">港澳</span>
            <ul class="region-list" v-show="region-state==1">
                <li>港澳</li>
                <li>东南亚</li>
                <li>欧美</li>
                <li>亚洲</li>
                <li>全球</li>
            </ul>
            <span class="type" @click="change-type">购物</span>
            <ul v-show="type-state==1" >
                <li>购物</li>
                <li>退税</li>
            </ul>
        </div>
        <div class="store-list">
             <div class="store-list-item">
            <img src="./images/quan_plogo.png" alt="" class="logo">
            <div class="middle-info">
                <span>莎莎</span>
                <p>最高6%折扣+8*免税</p>
            </div>
            <div class="current-info">
                <div class="left">
                    <span>已抢1</span>
                </div>
                <router-link to="/detail/this"><img src="@\static\images\littlebtn.png" alt="" class="booking" ></router-link>
                
            </div>

        </div>
        </div>
        <Tabbar></Tabbar>

    </div>
</template>

<style lang='scss' scoped>
.select-bar{
    width: 100%;
    height:30px;
    display: flex;
    margin: 5px auto;
    span{
        flex: 1;
        display: inline-block;
        text-align: center;
        line-height: 30px;
        &:first-child{
            border-right: .3px solid rgba(0,0,0,.2);
        }
        &:last-child{
            border-left: .3px solid rgba(0,0,0,.2);
        }
        &::after{
            content: '';
            display: inline-block;
            margin-left: 10px;
            width: 10px;
            height: 10px;
            background:url('./images/flex_down.png') no-repeat center;
        }
    }
}
.store-list{
    margin: 15px 15px;
.store-list-item{
    display: flex;
    margin: 30px auto;
    align-items: center;
    height: 100px;
.logo{
    width: 30%;
    height: 80px;
    border: 1px solid rgba(0,0,0,.3);

}
.middle-info{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px ;
    font-size: 18px;
    
    p{
        color: red;
        background: rgb(255, 230, 184);
        margin: 0;//这里不设置父级的justify-contrent就不生效
    }
}
    .current-info{
       width: 30%;
       height: 100px;
       display: flex;
       flex-direction: column;
        margin-right: 0;
        .left{
            position: relative;
            height: 80%;
            background: url('@/static/images/circlered.png') no-repeat center/80% 80%;
            span{
                position: absolute;
                bottom: 0;
                left: 25px;
                color: red;
            }
        }
        .booking{
          height:35px;
          width: 100%;
        }
       
    }
}
}

</style>

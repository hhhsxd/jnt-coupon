<script setup lang="ts">
import {useUserStore} from "@/store/userInfo"
import { onMounted,computed } from "vue";
const userinfoStore=useUserStore()

onMounted(()=>{
    // userinfoStore.reGet(userinfoStore.userinfo?.id)
    const token=sessionStorage.getItem('token')
    if(token){
        console.log(userinfoStore.userinfo);
    }else{
        console.log('还没传过来');
    }
})

const gender_type=[
    '男',
    '女'
]
const gender=computed(()=>gender_type[userinfoStore.userinfo?.user_sex])
</script>
<template>
    <div class="container">
        <van-nav-bar title="个人信息" left-arrow @click-left="$router.go(-1)"/>
        <div class="head-icon">
            <router-link to="/person-config/headpic">
                <img src="@/static/images/jnt.png" alt="">
            </router-link>
        </div>
        <div class="profile-info">
            <div class="info-name">
                <i class="iconfont icon-wo" />
                <span>用户名称</span>
                <span>{{ userinfoStore.userinfo?.user_name }}</span>
                <router-link class="iconfont icon-right-arrow" to="/person-config/name-edit"></router-link>
            </div>
            <div class="info-head">
                <i class="iconfont icon-female" />
                <span>性别</span>
                <span>{{ gender }}</span>
                <router-link to="/person-config/gender-edit" class="iconfont icon-right-arrow" ></router-link>
            </div>
        </div>
        <div class="outlogin">
            <router-link to="/login">退出登录</router-link>
          
        </div>
    </div>
</template>

<style lang='scss' scoped>
$left:188.5px;
.container{
    
    background: url("@/pages/personal/images/personal_headbg.png") no-repeat 0 46px/contain;

     .head-icon{
        width: 75px;
        height: 75px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 110px;
        left: 150px;        
        img{
            width: 100%;
            height: 100%;
        }
    }

   .profile-info{
    width: 100%;
    position: absolute;
    top:256px ;
    &>div{
        margin: 30px 15px;
        // font-size: 26px;
        display: flex;
        align-items: center;
        i{
            
                font-size: 25px;
                margin-right: 10px;
            
           
        }
        a{
                position: absolute;
                right: 30px;
            }
    } span{
      
            &:nth-of-type(1){
                font-size: 20px;
                
            }
            &:nth-of-type(2){
                position: absolute;
                right:50px;
                color: red;
            }
        }

   }
   .outlogin{
    position: absolute;
    bottom: 200px;
    left: 148.5px;
    font-size: 20px;
    color: rgb(186, 66, 142);

}
}

</style>

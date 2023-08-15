<script setup lang="ts">
import {ref} from 'vue'
import {configGenderAPI} from "@/common/person-config"
import { useUserStore } from '@/store/userInfo';
import router from '@/router/router';
const userinfoStore=useUserStore()
const id=userinfoStore.userinfo?.id!
const sex=ref<number>()
async function changeGender(e:Event){
    e.preventDefault();
    console.log(sex.value);
    try{
    const res=await configGenderAPI(sex.value,id)
   if(res.data.code==200){
    console.log(res);
    router.push({path:'/person-config'})
   }else{
    console.log('没有'+res);
   }
    }catch(err){
        throw(err)
    }

}
</script>
<template>
    <div>
        <van-nav-bar title="选择性别" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
     <form @submit="changeGender">
        <div> 
      <input type="radio" name="gender" id="female" value="1" v-model="sex" checked> <label for="female">女</label>
        </div>
        <div>
            <input type="radio" name="gender" value="0" v-model="sex" id="male"><label for="male">男</label>
        </div>
        <input type="submit" value="更改" class="subbtn">
          </form>
    </div>
</template>

<style lang='scss' scoped>
form{
    margin: 20px 30px;
    div{
            padding: 30px 0;
            &:first-child{
                border-bottom: 1px solid grey;
            }
           label{
            display: inline-block;
           font-size: 20px;
           width: 95%;
           text-align: left;
           height: 30px;
           line-height: 30px;

           &::after{
            content: "";
            opacity: 0;
            background: url(../images/check.png) no-repeat center;
            display: inline-block;
            width:20px;
            height: 20px;
            position: absolute;
            left:80%;
           }
            }
            input{
                -webkit-appearance:none;
                appearance:none;
            }
            input:checked + label::after{
                opacity:1;
            }
    }
    .subbtn{
        width:60px;
        height: 30px;
        font-size: 18px;
        line-height:30px;
        margin-top: 30px;
        position: absolute;
        left: 152px;

    }
}

</style>

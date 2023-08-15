<script setup lang="ts">
import Tabbar from '@/components/tabbar.vue';
import {ref} from 'vue'
const identity=ref(null)
const isShow=ref(false)
// const getCoupons=ref(false)
function toggleShow(){
    console.log(identity);
    if(isShow.value==false){
        isShow.value=true
    }else if(isShow.value==true){
        isShow.value=false
    }
}
// function getCoupon(){
//     if(!coupons)
// }
</script>
<template>
    <div class="container">
     <van-nav-bar title="领取优惠券" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
        <div class="coupon-info wrapper">
            <div class="coupon-card" style="width:100%;height:300px;">

            </div>
            <div class="get-coupon-btn">
                <button >领取到卡包</button>
                <!-- <div class="alert"  ref="alert" v-if="0">
                    领取成功！@click="getCoupon"
                </div> -->
            </div>
            <div class="info-detail">
               <h4>优惠详情</h4>
            <div class="coupon-rule-title">【优惠券有效期】</div>
             <div class="coupon-rule-detail">自领取日起5天内有效</div>
             <div class="coupon-rule-title">【活动范围】</div>
             <div class="coupon-rule-detail">所有银联卡（卡号以62开头）</div>
             <div class="coupon-rule-title">【活动地点】</div>
             <div class="coupon-rule-detail">莎莎香港及澳门所有门店</div>
             <div class="coupon-rule-title">【活动内容】</div>
             <div class="coupon-rule-detail identity" ref="identity" :class="{active:isShow}">
                   <p>
                     1、优惠活动期内，银联卡（卡号以62开头）持卡人在莎莎香港及澳门门店消费单笔购物金额满港币或澳门币100元或以上，经验证以二维码或条形码为形式的莎莎电子现金券后使用银联卡支付，立减港币或澳门币30元；
                   </p>
                   <p>2、具体电子现金券可使用时间以券显示有效期为准；</p>
                   <p>3、每一次交易仅可使用一张电子现金券，不可拆分，不能提现；</p>
                   <p>4、每人每天在同一店内只可使用最多3张电子现金券；</p>
                   <p>5、必须于付款前声明使用且主动出示电子现金券；</p>
                   <p>6、交易必须通过银联网络付款，方可享有此优惠；</p>
                   <p>7、本活动仅限莎莎香港及澳门所有门店；</p>
                   <p>8、活动详情以店内信息为准；</p>
                   <p>9、本活动的最终解释权归莎莎、锦囊团和银联国际共同所有。</p>
                   
            </div>
            <div class="btn" >
                <button @click="toggleShow">查看详情</button>
            </div>
        </div> 

        <div class="comment">
            <h4>最新评论</h4>
            <div class="com-item">
                 <div class="left">
                <div class="telnum">131****9089</div>
                <div class="com">还行吧</div>
            </div>
            <div class="star">*****</div>
            </div>
           
        </div>
        </div>
     <Tabbar></Tabbar>
    </div>
</template>

<style lang='scss' scoped>
.container{
.coupon-info{
    margin: 0 5%;
    line-height: 25px;
    .get-coupon-btn{
        background-color: rgb(26, 123, 161);
        height: 40px;
        width: 300px;
        text-align: center;
        margin: 10px auto;
        line-height: 40px;
        color: white;
        font-size: 18px;
    }
    .info-detail{
        margin-top: 40px;
        padding-top: 40px;
        position: relative;
        white-space:pre-wrap;
        border-top: 1px solid black;
        h4{
            height: 30px;
            width: 100px;
            text-align:center;
            background-color: white;
            position: absolute;
            top: -35px;
            left: 118.75px;
        }
        

        .coupon-rule-title{
            font-size: 15px;
            color: #06b0f0;
        }
        .coupon-rule-detail{
            column-rule: #4b4b4b;;
        }

    .identity{
        position: relative;
        height: 100px;
        width:100%;
        overflow-y: hidden;
        
        &::after{
        content: "";
        width: 100%;
        height: 100px;
        display:inline-block;
        position: absolute;
        top: 0px;
        background:linear-gradient(180deg,transparent,white);
    }
    &.active{
        height: 500px;
        overflow-y:visible;
       & + .btn{
            background-image: url('../images/flex_up.png');
        }
        &::after{
            background: none;
        }
    }
    }
    .btn{
        margin: 10px auto;
        width: 100px;
         background-image: url(../images/flex_down.png);
         background-repeat: no-repeat;
         background-position: 90%;
        button{
            width: 100px;
            margin: 10px auto;
            display:flex;
        }
    }
}
.comment{
    border-top: 1px solid black;
    margin: 30px auto;
    position: relative;
            h4{
                font-weight: 400;
                height: 30px;
                width: 100px;
                text-align:center;
                background-color: white;
                position: absolute;
                position: absolute;
                top: -35px;
                left: 118.75px;
            }
            .com-item{
                display: flex;
                justify-content: space-between;
                margin: 10px auto;
                .left{
                    .telnum{
                        font-size: 18px;
                    }
                    .com{
                        color: #646363;
                    }
                }
            }
        }
}

}


</style>

<script setup lang="ts">
</script>
<template>
    <div>
        <van-nav-bar title="修改头像" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
       <form action="">
        <input type="">
        <label for=""></label>
        <input type="text" class="img">
        <input type="submit" >
       </form>

    </div>
</template>

<style lang='scss' scoped>
.img{
    background-image: url('../images/upload-btn.png');
    background-position: center;
    background-size: 200px 200px;
}

</style>

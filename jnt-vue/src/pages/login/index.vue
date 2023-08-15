<script setup lang="ts">

import Layout from "./components/layout.vue"
</script>
<template>
    <div class="container">
      <van-nav-bar title="欢迎来到锦囊团" />
       <Layout></Layout>
    <router-view></router-view>
    </div>
</template>

<style lang='scss' scoped>

</style>

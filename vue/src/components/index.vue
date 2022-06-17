<template>
  <div class="main">
    <div>{{ descript }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// import { useRouter } from "vue-router";
// const router = useRouter();
// let params = router.currentRoute.value.query; // query参数跳转
// // let params = router.currentRoute.value.params // params参数跳转
// console.log("currentRoute.value:", router.currentRoute.value);
// console.log("params:", params);
const descript = ref("勇士总冠军!!!");
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  font-size: 100px;
  color: #33388a;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>

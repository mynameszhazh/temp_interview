<template>
  <div class="main">
    <div>{{descript}}</div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const descript = ref('勇士总冠军!!!')
</script>

<style  scoped>
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
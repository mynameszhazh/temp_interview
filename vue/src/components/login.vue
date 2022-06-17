<template>
  <div class="login">
    <div class="center">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <!-- <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item> -->

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

interface FormState {
  username: string;
  password: string;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  // remember: true,
});
const onFinish = (values: FormState) => {
  console.log("Success:", values);
  fetch('/api', {
    method: 'get',
    // body: JSON.stringify(values)
    mode:'cors'
  }).then(res => {
    console.log(res, 59)
  }).catch(err => {
    console.log(err, '61 err')
  })
};

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:", errorInfo);
// };
</script>

<style scoped>
.login{
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  background-color: #fff;
}
</style>

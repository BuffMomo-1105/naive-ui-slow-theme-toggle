<script setup>
import { NCard, NSpace, NInput, NForm, NFormItem, NLayout, NButton, NIcon } from 'naive-ui'

import { useRouter } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
import { darkTheme } from 'naive-ui'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const router = useRouter()
const registerForm = ref({
  password: '',
  userId: '',
  alias: '',
})
async function handleRegister() {
  // console.log(registerForm.value);
  await userStore.register(registerForm.value)
}
</script>
<template>
  <n-config-provider :theme="darkTheme">
    <n-layout
      class="hb-admin-signup"
      content-style="width:100%;backdrop-filter: blur(5px);opacity:0.8; backgroundColor:black;"
    >
      <n-space vertical justify="center" align="center" style="height: 100%; width: 100%">
        <n-space justify="center" style="width: 250px">
          <img class="hb-logo" src="../assets/onebag.png" />
        </n-space>
        <n-card title="註冊" hoverable class="hb-card animate__animated animate__fadeIn animate__slow">
          <n-form class="hb-form">
            <n-form-item label="帳號">
              <n-input size="large" v-model:value="registerForm.userId" placeholder="輸入手機號碼">
                <template #prefix>
                  <!-- <n-icon :component="MailOutline" /> -->
                  <i class="fas fa-envelope"></i>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item label="稱號">
              <n-input size="large" v-model:value="registerForm.alias" placeholder="輸入稱號">
                <template #prefix>
                  <!-- <n-icon :component="Person" /> -->
                  <i class="fas fa-user"></i>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item label="密碼">
              <n-input type="password" size="large" v-model:value="registerForm.password" placeholder="輸入密碼">
                <template #prefix>
                  <!-- <n-icon :component="LockOpenOutline" /> -->
                  <i class="fas fa-lock"></i>
                </template>
              </n-input>
            </n-form-item>
          </n-form>
          <template #action>
            <n-button size="large" type="success" block @click="handleRegister"> 註冊 </n-button>
            <n-space class="mt-5" justify="center">
              已經擁有帳戶?<n-button
                type="info"
                tag="a"
                text
                @click="
                  () => {
                    router.push('/auth/login')
                  }
                "
                >登入</n-button
              >
            </n-space>
          </template>
        </n-card>
      </n-space>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.hb-admin-signup {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
}

.hb-card {
  box-shadow: var(--n-box-shadow);
}

.hb-form {
  width: 340px;
}
</style>

<template>
  <n-config-provider :theme="darkTheme">
    <n-card>
      <n-tabs
        class="card-tabs"
        default-value="signin"
        size="large"
        animatedP
        style="margin: 0 -4px"
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
      >
        <n-tab-pane name="signin" tab="Sign in">
          <n-space>
            <n-space vertical justify="center" align="center" style="height: 100%; width: 100%">
              <n-space justify="center" style="width: 250px">
                <img src="@/assets/logo.svg" />
              </n-space>

              <n-card
                hoverable
                class="hb-card animate__animated animate__fadeIn animate__slow"
                content-style="height: 180px"
              >
                <n-form class="hb-form animate__animated animate__fadeIn" ref="loginFormRef" :model="loginForm">
                  <n-form-item label="帳號" path="username">
                    <n-input size="large" v-model:value="loginForm.userId" placeholder="輸入手機號碼">
                      <template #prefix>
                        <i class="fas fa-user"></i>
                      </template>
                    </n-input>
                  </n-form-item>
                  <n-form-item label="密碼" path="password">
                    <n-input type="password" size="large" v-model:value="loginForm.password" placeholder="輸入密碼">
                      <template #prefix>
                        <i class="fas fa-lock"></i>
                      </template>
                    </n-input>
                  </n-form-item>
                </n-form>
                <template #action>
                  <n-button size="large" type="success" block @click="login"> 登入 </n-button>
                  <!-- <n-space justify="center" style="margin-top: 30px">
              <n-button type="info" tag="a" text @click="
                () => {
                  router.push('/recover');
                }
              ">忘記密碼？</n-button>
            </n-space> -->
                  <n-space class="mt-5" justify="center">
                    尚未有帳戶?
                    <n-button
                      type="info"
                      tag="a"
                      text
                      @click="
                        () => {
                          router.push('/auth/register')
                        }
                      "
                      >註冊</n-button
                    >
                  </n-space>
                </template>
              </n-card>
            </n-space>
          </n-space>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="Sign up">
          <n-space
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
          </n-space>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-config-provider>
</template>

<script setup>
// import { NCard, NSpace, NInput, NForm, NFormItem, NLayout, NButton, NIcon } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { useRouter } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'

const router = useRouter()

const loginForm = ref({
  userId: '',
  password: '',
})
const registerForm = ref({
  password: '',
  userId: '',
  alias: '',
})
const loginFormRef = ref(null)

async function login() {}
async function handleRegister() {}
</script>

<style scoped>
.hb-admin-login {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.image-bg {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

.hb-card {
  box-shadow: var(--n-box-shadow);
}

.hb-form {
  width: 340px;
}

.hb-logo {
  width: 100px;
  height: 100px;
}

.qr-login-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

.qr-code {
  width: 180px;
  height: 180px;
  border: 2px solid #a0ee68;
  border-radius: 5px;
}

.scan-mark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.qr-code-scan {
  opacity: 0.5;
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}
.hb-admin-signup {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
}
</style>

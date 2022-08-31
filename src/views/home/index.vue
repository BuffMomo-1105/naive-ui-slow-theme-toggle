<template>
  <n-config-provider
    :theme="inverted ? darkTheme : null"
    :theme-overrides="inverted == true ? darkThemeOverrides : lightThemeOverrides"
  >
    <n-theme-editor>
      <n-layout has-sider>
        <n-icon size="50" class="absolute z-99999999 left-2 top-2 cursor-pointer" @click="collapsed = !collapsed">
          <menu-icon />
        </n-icon>
        <TheMenu v-model:collapsed="collapsed">
          <template v-slot:theme-switch>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              @click="changeTheme"
              class="cursor-pointer"
            >
              <path
                d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
                fill="currentColor"
              ></path>
            </svg>
          </template>
        </TheMenu>
        <div class="block">
          <div v-for="index in 25" :key="index" class="m-4">
            <DataTable />
          </div>
        </div>
      </n-layout>
    </n-theme-editor>
  </n-config-provider>
</template>

<script setup>
import { Menu as MenuIcon, Heart as PickIcon, Settings as SettingIcon } from '@vicons/ionicons5'
import TheMenu from './Menu.vue'
import DataTable from './DataTable.vue'
import { darkTheme, NThemeEditor, NConfigProvider } from 'naive-ui'
import { NIcon } from 'naive-ui'
import { inject, ref, onMounted, computed } from 'vue'

function changeTheme() {
  console.log('change theme ', inverted)
  inverted.value = !inverted.value
  document.body.classList.toggle('dark-theme')
}

const collapsed = ref(true)
const inverted = ref(true)
</script>

<style>
.n-layout .n-layout-scroll-container {
  overflow-x: hidden;
  box-sizing: border-box;
  height: 100vh;
}

.n-layout-sider-scroll-container {
  overflow: hidden !important;
}

.n-layout-sider .n-layout-toggle-button {
  top: 5%;
}
</style>

<template>
  <div>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="0"
      :width="240"
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false"
      class="absolute h-full z-9999 pt-8"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        class="h-4/5 mt-5"
      ></n-menu>
      <n-grid :y-gap="12" :cols="4" layout-shift-disabled>
        <n-gi>
          <slot name="theme-switch"></slot>
        </n-gi>
        <n-gi :span="2"> </n-gi>
        <n-gi>
          <n-icon size="30">
            <setting-icon />
          </n-icon>
        </n-gi>
      </n-grid>
    </n-layout-sider>
  </div>
</template>

<script setup>
import { ref, h } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu as MenuIcon, Heart as PickIcon, Settings as SettingIcon } from '@vicons/ionicons5'
const props = defineProps({
  collapsed: { required: true },
})
const route = useRoute()
</script>

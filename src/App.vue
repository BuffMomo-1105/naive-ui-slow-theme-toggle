<template>
  <n-message-provider>
    <div class="flex flex-col h-screen justify-between">
      <RouterView name="Menu"></RouterView>
      <RouterView class="mb-auto h-10 bg-green-500"></RouterView>
      <RouterView name="Footer" class="h-10 bg-blue-500"></RouterView>
    </div>
  </n-message-provider>
</template>

<script setup></script>

<style lang="scss" scoped>
</style>

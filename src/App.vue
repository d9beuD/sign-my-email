<script setup lang="ts">
import MailWindow from './components/Window.vue'
import SidebarMain from './components/SidebarMain.vue'
</script>

<template>
  <div id="app-container" class="flex h-dvh w-dvw bg-sky-100">
    <div class="h-full w-96 border-e bg-background">
      <div class="p-4">
        <SidebarMain />
      </div>
    </div>

    <div class="h-full grow">
      <div class="h-full ps-8 pt-8">
        <MailWindow />
      </div>
    </div>
  </div>
</template>

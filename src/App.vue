<script setup lang="ts">
import MailWindow from './components/Window.vue'
import SidebarMain from './components/SidebarMain.vue'
import { Toaster } from './components/ui/sonner'
</script>

<template>
  <div id="app-container" class="flex h-dvh w-dvw bg-blue-100 dark:bg-blue-950">
    <div class="h-full max-h-full w-96 overflow-auto border-r bg-background">
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

  <Toaster position="top-right" rich-colors />
</template>

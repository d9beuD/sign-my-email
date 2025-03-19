<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import WindowBody from './WindowBody.vue'
import WindowHeader from './WindowHeader.vue'
</script>

<template>
  <div
    class="flex h-full flex-col overflow-auto rounded-tl-xl border-s border-t bg-background shadow-2xl dark:bg-zinc-800"
  >
    <WindowHeader class="sticky top-0" />
    <WindowBody class="flex-auto grow overflow-auto pb-4" />
  </div>
</template>

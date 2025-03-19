<script lang="ts" setup>
import WindowHeaderDots from './WindowHeaderDots.vue'
import WindowHeaderSend from './WindowHeaderSend.vue'
import WindowHeaderShare from './WindowHeaderShare.vue'
import WindowHeaderTheme from './WindowHeaderTheme.vue'
</script>

<template>
  <div
    class="flex items-center gap-8 border-b bg-slate-50 p-4 text-slate-400 dark:bg-zinc-700 dark:text-zinc-400"
  >
    <WindowHeaderDots />
    <WindowHeaderSend />
    <div>
      <WindowHeaderTheme />
      <WindowHeaderShare />
    </div>
  </div>
</template>

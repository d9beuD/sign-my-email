<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import WindowBody from './WindowBody.vue'
import WindowHeader from './WindowHeader.vue'
</script>

<template>
  <div class="h-full overflow-auto rounded-tl-xl border-s border-t bg-background shadow-2xl">
    <WindowHeader />
    <WindowBody />
  </div>
</template>

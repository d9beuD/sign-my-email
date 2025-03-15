<script setup lang="ts">
import { faChevronDown, faPaperPlane } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="flex items-center gap-3">
    <FontAwesomeIcon :icon="faPaperPlane" />
    <div class="h-5 border-l"></div>
    <FontAwesomeIcon :icon="faChevronDown" class="text-sm" />
  </div>
</template>

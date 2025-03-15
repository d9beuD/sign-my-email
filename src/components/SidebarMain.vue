<script setup lang="ts">
import { faSignature } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="flex flex-col space-y-4">
    <h1 class="flex items-center gap-x-2 text-lg font-bold text-primary">
      <FontAwesomeIcon :icon="faSignature" />
      <span>Sign My Email</span>
    </h1>
    <div class="">
      <h2 class="border-b">Personal Info</h2>
    </div>
  </div>
</template>

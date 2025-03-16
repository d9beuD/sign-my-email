<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'

const signatureStore = useSignatureStore()
</script>

<template>
  <div class="pt-4">
    <component v-if="signatureStore.template" :is="signatureStore.template.template" />
  </div>
</template>

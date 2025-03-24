<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { templates } from './template'
import type { Templates } from '@/types'
import { computed, type Component } from 'vue'

const signatureStore = useSignatureStore()
const currentTemplate = computed<Component | null>(() => {
  if (!signatureStore.template) {
    return null
  }

  const templateKey = signatureStore.template as Templates

  return templates[templateKey].template
})
</script>

<template>
  <div class="pt-4 text-foreground" id="rendered-signature" aria-hidden="true" inert>
    <component v-if="currentTemplate" :is="currentTemplate" />
  </div>
</template>

<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { templates } from './template'
import type { Templates } from '@/types'
import { computed, type Component } from 'vue'
import Skeleton from './ui/skeleton/Skeleton.vue'

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

    <div v-else class="flex flex-col gap-2">
      <Skeleton class="size-24 rounded-full" />
      <skeleton class="h-4 w-40" />
      <skeleton class="h-4 w-28" />
      <skeleton class="h-4 w-36" />
      <Skeleton class="h-12 w-48" />
      <div class="flex gap-2">
        <Skeleton class="size-6" />
        <Skeleton class="size-6" />
        <Skeleton class="size-6" />
        <Skeleton class="size-6" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import TemplateImage from '../TemplateImage.vue'
import { computed } from 'vue'

const signatureStore = useSignatureStore()
const borderRadius = computed(() => {
  if (!signatureStore.themeOptions.image.personal.rounded) {
    return '0px'
  }

  if (signatureStore.themeOptions.image.personal.borderRadius === 'full') {
    return '50%'
  }

  return `${signatureStore.themeOptions.image.personal.width}px`
})
</script>

<template>
  <TemplateImage
    :src="signatureStore.personalInfo.pictureUrl"
    :width="signatureStore.themeOptions.image.personal.width"
    :border-radius="borderRadius"
    alt=""
  />
</template>

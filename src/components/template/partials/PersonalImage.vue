<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import TemplateImage from '../TemplateImage.vue'

const signatureStore = useSignatureStore()
</script>

<template>
  <TemplateImage
    v-if="signatureStore.personalPictureUrl"
    :src="signatureStore.personalPictureUrl"
    :width="signatureStore.themeOptions.image.personal.width"
    :border-radius="signatureStore.themeOptions.image.personal.borderRadius"
    alt="Personal picture"
  />
</template>

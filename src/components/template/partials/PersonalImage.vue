<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import TemplateImage from '../TemplateImage.vue'

const signatureStore = useSignatureStore()
</script>

<template>
  <TemplateImage
    :src="signatureStore.personalInfo.pictureUrl as string"
    :width="signatureStore.themeOptions.image.personal.width"
    :border-radius="signatureStore.themeOptions.image.personal.borderRadius"
    alt=""
  />
</template>

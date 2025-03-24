<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import TemplateImage from '../TemplateImage.vue'

const signatureStore = useSignatureStore()
</script>

<template>
  <TemplateImage
    :src="signatureStore.businessInfo.pictureUrl as string"
    :width="signatureStore.themeOptions.image.business.width"
    :border-radius="signatureStore.themeOptions.image.business.borderRadius"
    alt=""
  />
</template>

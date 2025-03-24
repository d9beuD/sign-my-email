<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import TemplateImage from '../TemplateImage.vue'

const signatureStore = useSignatureStore()
</script>

<template>
  <TemplateImage
    v-if="signatureStore.businessPictureUrl"
    :src="signatureStore.businessPictureUrl"
    :width="signatureStore.themeOptions.image.business.width"
    :border-radius="signatureStore.themeOptions.image.business.borderRadius"
    alt="Business picture"
  />
</template>

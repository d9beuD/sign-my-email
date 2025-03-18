<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { computed } from 'vue'

const signatureStore = useSignatureStore()

const personalNameStyle = computed(
  () =>
    `font-weight: bold;` +
    `margin-bottom: 8px;` +
    `color: ${signatureStore.themeOptions.color.primary};` +
    `font-size: ${signatureStore.themeOptions.text.fontSize.title}px;` +
    `line-height: ${signatureStore.themeOptions.text.fontSize.title}px;`,
)
</script>

<template>
  <div v-if="signatureStore.personalInfo.name" :style="personalNameStyle">
    {{ signatureStore.personalInfo.name }}
  </div>
  <div v-if="signatureStore.personalInfo.jobTitle">
    {{ signatureStore.personalInfo.jobTitle }}
  </div>
  <div v-if="signatureStore.personalInfo.department">
    {{ signatureStore.personalInfo.department }}
  </div>
  <div v-if="signatureStore.businessInfo.companyName">
    {{ signatureStore.businessInfo.companyName }}
  </div>
</template>

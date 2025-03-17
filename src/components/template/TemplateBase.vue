<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { computed } from 'vue'

const signatureStore = useSignatureStore()
const resetLinks = '<style>.reset-links a { text-decoration: none !important; }</style>'
const textColor = computed(() =>
  signatureStore.themeOptions.color.secondaryUnset
    ? 'inherit'
    : signatureStore.themeOptions.color.secondary,
)
const textStyle = computed(() => `color: ${textColor.value};`)
</script>

<template>
  <div v-html="resetLinks"></div>
  <table
    cellpadding="0"
    cellspacing="0"
    border="0"
    class="reset-links"
    :style="
      `margin: 0px; border-collapse: collapse;` +
      `font-size: ${signatureStore.themeOptions.text.fontSize.base}px;` +
      `line-height: ${signatureStore.themeOptions.text.fontSize.base}px;` +
      textStyle
    "
  >
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

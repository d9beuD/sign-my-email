<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'

const signatureStore = useSignatureStore()
</script>

<template>
  <table
    cellpadding="0"
    cellspacing="0"
    border="0"
    class="reset-links"
    :style="
      `margin: 0px; border-collapse: collapse;` +
      `font-size: ${signatureStore.themeOptions.text.fontSize.base}px;` +
      `line-height: ${signatureStore.themeOptions.text.fontSize.base}px;`
    "
  >
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { computed } from 'vue'

const signatureStore = useSignatureStore()
const resetLinks =
  '<style>' +
  '.reset-table a { text-decoration: none !important; color: inherit }' +
  '.reset-table img { display: inline-block !important; }' +
  '</style>'
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
    class="reset-table"
    :style="
      `margin: 0px; border-collapse: collapse; height: 1px;` +
      `font-size: ${signatureStore.themeOptions.text.fontSize.base}px;` +
      `line-height: ${signatureStore.themeOptions.text.fontSize.base}px;` +
      textStyle
    "
  >
    <tbody style="vertical-align: top">
      <slot></slot>
    </tbody>
  </table>
</template>

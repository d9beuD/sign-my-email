<script setup lang="ts">
const resetLinks = '<style>.reset-links a { text-decoration: none !important; }</style>'
</script>

<template>
  <div v-html="resetLinks"></div>
  <table
    cellpadding="0"
    cellspacing="0"
    border="0"
    class="reset-links"
    style="margin: 0px; border-collapse: collapse; font-size: 16px; line-height: 16px"
  >
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

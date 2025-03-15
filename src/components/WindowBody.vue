<script setup lang="ts">
import TemplatePreview from './TemplatePreview.vue'
import WindowBodyHeader from './WindowBodyHeader.vue'
</script>

<template>
  <div class="ps-6">
    <WindowBodyHeader label="To" value="Your Recipient" />
    <WindowBodyHeader label="Subject" value="Your Subject" />

    <TemplatePreview />
  </div>
</template>

<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { computed } from 'vue'

interface Props {
  orientation: 'horizontal' | 'vertical'
}

const props = defineProps<Props>()
const signatureStore = useSignatureStore()

const dividerStyle = computed(() => {
  const borderSide = props.orientation === 'horizontal' ? 'top' : 'left'
  return `border-${borderSide}: ${signatureStore.themeOptions.divider.width}px solid ${signatureStore.themeOptions.color.primary}`
})
</script>

<template>
  <div :style="dividerStyle"></div>
</template>

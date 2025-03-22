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
  const spreadSide = props.orientation === 'horizontal' ? 'width' : 'height'
  return (
    `border-${borderSide}: ${signatureStore.themeOptions.divider.width}px solid ${signatureStore.themeOptions.color.primary};` +
    `${spreadSide}: 100%;`
  )
})
</script>

<template>
  <div :style="dividerStyle"></div>
</template>

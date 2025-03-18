<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { computed } from 'vue'

interface Props {
  width: number
  borderRadius: string
  src?: string
}

const signatureStore = useSignatureStore()
const props = defineProps<Props>()

const imageStyle = computed(() => {
  const style = `width: ${props.width}px;` + `border-radius: ${props.borderRadius}`
  return style
})
</script>

<template>
  <img :src="signatureStore.personalInfo.pictureUrl" alt="" :style="imageStyle" />
</template>

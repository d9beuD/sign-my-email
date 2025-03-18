<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  width: number
  borderRadius: string
  src?: string
}

const props = defineProps<Props>()

const imageStyle = computed(() => {
  const style = `width: ${props.width}px;` + `border-radius: ${props.borderRadius}`
  return style
})
</script>

<template>
  <img :src="props.src" alt="" :style="imageStyle" />
</template>

<script setup lang="ts">
import type { Color } from '@/types'

interface Props {
  color?: Color
}

const props = defineProps<Props>()
</script>

<template>
  <span
    class="inline-block size-3 rounded-sm"
    :style="`background-color: ${props.color ?? 'hsl(var(--foreground))'}`"
  ></span>
</template>

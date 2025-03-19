<script setup lang="ts">
import { Label } from './ui/label'

interface Props {
  label: string
  for?: string
}

const props = withDefaults(defineProps<Props>(), {
  for: '',
})
</script>

<template>
  <div class="mb-4">
    <Label :for="props.for">{{ props.label }}</Label>
    <slot></slot>
  </div>
</template>

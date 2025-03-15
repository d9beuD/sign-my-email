<script setup lang="ts">
interface Props {
  label: string
  value: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="border-b py-2 dark:border-zinc-600">{{ props.label }}: {{ props.value }}</div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  value: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="border-b py-2 text-slate-500">{{ props.label }}: {{ props.value }}</div>
</template>

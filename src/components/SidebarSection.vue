<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

interface Props {
  title: string
  icon: IconDefinition
}

const props = defineProps<Props>()
</script>

<template>
  <section class="rounded bg-accent p-2">
    <h2 class="mb-2 flex items-center gap-x-3">
      <FontAwesomeIcon :icon="props.icon" size="lg" fixed-width />
      {{ props.title }}
    </h2>

    <slot></slot>
  </section>
</template>

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
  <section>
    <h2 class="mb-2 flex items-center gap-x-3 border-b pb-2">
      <FontAwesomeIcon :icon="props.icon" size="lg" />
      {{ props.title }}
    </h2>

    <slot></slot>
  </section>
</template>

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
    <h2 class="mb-2 flex items-center gap-x-3">
      <FontAwesomeIcon :icon="props.icon" size="lg" fixed-width />
      {{ props.title }}
    </h2>

    <div class="ml-0 rounded-tl border-l border-t border-primary pl-4 pt-2">
      <slot></slot>
    </div>
  </section>
</template>

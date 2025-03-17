<script setup lang="ts">
import TemplateColumn from './TemplateColumn.vue'
import TemplateGrid from './TemplateGrid.vue'
import TemplateRow from './TemplateRow.vue'

const iconCellStyle = 'padding-right: 8px; margin-right: 1px; vertical-align: top;'
</script>

<template>
  <TemplateGrid>
    <TemplateRow>
      <TemplateColumn :style="iconCellStyle">
        <slot name="icon" />
      </TemplateColumn>

      <TemplateColumn>
        <slot />
      </TemplateColumn>
    </TemplateRow>
  </TemplateGrid>
</template>

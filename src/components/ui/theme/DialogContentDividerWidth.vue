<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../dialog'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '../number-field'
import { Skeleton } from '../skeleton'
import TemplateDivider from '@/components/template/TemplateDivider.vue'

const signatureStore = useSignatureStore()
</script>

<template>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Dividers width</DialogTitle>
      <DialogDescription> This is the divider width in <code>px</code> unit. </DialogDescription>

      <div class="flex items-center gap-2">
        <Skeleton class="size-12 rounded-full" />

        <TemplateDivider orientation="vertical" />

        <div class="flex grow flex-col gap-2">
          <Skeleton class="h-4 w-8/12" />
          <Skeleton class="h-4 w-6/12" />
        </div>
      </div>
    </DialogHeader>

    <NumberField v-model="signatureStore.themeOptions.divider.width" :min="1">
      <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldContent>
    </NumberField>
  </DialogContent>
</template>

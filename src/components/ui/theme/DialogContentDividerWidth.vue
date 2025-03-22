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

const signatureStore = useSignatureStore()
</script>

<template>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Dividers width</DialogTitle>
      <DialogDescription> This is the divider width in <code>px</code> unit. </DialogDescription>
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

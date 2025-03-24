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
import BusinessImage from '@/components/template/partials/BusinessImage.vue'

const signatureStore = useSignatureStore()
</script>

<template>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Business Picture Size</DialogTitle>
      <DialogDescription> This is the picture width in <code>px</code> unit. </DialogDescription>
      <BusinessImage />
    </DialogHeader>

    <NumberField v-model="signatureStore.themeOptions.image.business.width" :min="0">
      <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldContent>
    </NumberField>
  </DialogContent>
</template>

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
import PersonalImage from '@/components/template/partials/PersonalImage.vue'

const signatureStore = useSignatureStore()
</script>

<template>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile Picture Size</DialogTitle>
      <DialogDescription> This is the picture width in <code>px</code> unit. </DialogDescription>
      <PersonalImage />
    </DialogHeader>

    <NumberField v-model="signatureStore.themeOptions.image.personal.width" :min="0">
      <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldContent>
    </NumberField>
  </DialogContent>
</template>

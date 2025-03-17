<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../dialog'
import { Input } from '../input'

const SignatureStore = useSignatureStore()
</script>

<template>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Primary Color</DialogTitle>
      <DialogDescription>
        The primary color is used on separator lines and on highlighted texts.
      </DialogDescription>
    </DialogHeader>

    <Input type="color" v-model="SignatureStore.themeOptions.color.primary" />
  </DialogContent>
</template>

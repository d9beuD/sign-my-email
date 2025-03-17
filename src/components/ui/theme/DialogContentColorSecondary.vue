<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../dialog'
import { Input } from '../input'
import { Label } from '../label'
import { Checkbox } from '../checkbox'

const signatureStore = useSignatureStore()
</script>

<template>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Secondary Color</DialogTitle>
      <DialogDescription>
        The secondary color is used as a default color for texts. Leave this unset for adaptive
        color (light and dark theme in email clients).
      </DialogDescription>
    </DialogHeader>

    <div class="flex items-center space-x-2">
      <Checkbox
        id="colorSecondaryUnset"
        v-model="signatureStore.themeOptions.color.secondaryUnset"
      />
      <Label for="colorSecondaryUnset">Unset (auto)</Label>
    </div>

    <Input
      v-if="!signatureStore.themeOptions.color.secondaryUnset"
      type="color"
      v-model="signatureStore.themeOptions.color.secondary"
    />
  </DialogContent>
</template>

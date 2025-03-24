<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileImport } from '@fortawesome/pro-regular-svg-icons'
import { useSignatureStore } from '@/stores/signature'
import { Button } from './ui/button'
import { onBeforeUnmount, onMounted } from 'vue'
import { importFile } from '@/lib/utils'
import { toast } from 'vue-sonner'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

const signatureStore = useSignatureStore()
const input: HTMLInputElement = document.createElement('input')

const handleSignatureImport = () => {
  const files = input.files

  if (!files?.length) {
    return
  }

  importFile(files[0])
    .then((signature) => JSON.parse(signature))
    .then((signature) => signatureStore.loadSignature(signature))
    .then(() => toast.success('The signature has been imported!'))
    .catch((reason) => toast.error(`An error occured: ${reason}`))
    .finally(() => (input.value = ''))
}

onMounted(() => {
  input.type = 'file'
  input.accept = 'application/json'

  input.addEventListener('change', handleSignatureImport)
})

onBeforeUnmount(() => input.removeEventListener('change', handleSignatureImport))
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Button
          aria-label="Import a signature"
          variant="ghost"
          class="h-7 rounded-lg px-3 py-0.5 leading-6 transition-colors hover:bg-gray-500/10"
          @click="() => input.click()"
        >
          <FontAwesomeIcon :icon="faFileImport" class="text-foreground" />
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <p>Import a signature</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

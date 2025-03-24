<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShare } from '@fortawesome/pro-regular-svg-icons'
import { Button } from './ui/button'
import { toast } from 'vue-sonner'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { copySignature, downloadFile, sanitizeSignature } from '@/lib/utils'
import { useSignatureStore } from '@/stores/signature'
import { computed } from 'vue'
import { templates } from './template'
import type { Templates } from '@/types'

const share = () => {
const signatureStore = useSignatureStore()

const handleCopySignature = () => {
  const signature = document.querySelector('#rendered-signature')

  if (!signature) {
    return
  }

  copySignature(sanitizeSignature(signature))
    .then(() => toast.success('Signature has been copied to your clipboard!'))
    .catch((reason) => toast.error(`An error occured: ${reason}`))
}

const filename = computed(() =>
  templates[signatureStore.template as Templates].name.toLocaleLowerCase().replace(/\s+/g, '-'),
)

const handleDownloadSignature = () =>
  downloadFile(`${filename.value}.json`, signatureStore.exportableSignature as string)

const handleDownloadThemeOnly = () =>
  downloadFile(`${filename.value}-theme.json`, signatureStore.exportableTheme as string)
</script>





<template>
  <Button
    class="h-7 rounded-lg px-3 py-0.5 leading-6 transition-colors hover:bg-gray-500/10"
    variant="ghost"
    @click="share"
    aria-label="Share this signature"
  >
    <FontAwesomeIcon :icon="faShare" class="text-foreground" />
  </Button>
</template>

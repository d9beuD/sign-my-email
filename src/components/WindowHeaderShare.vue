<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy, faDownload, faShare } from '@fortawesome/pro-regular-svg-icons'
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

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
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Share this signature"
            class="rounded-lg px-3 py-0.5 transition-colors hover:bg-gray-500/10"
          >
            <FontAwesomeIcon :icon="faShare" class="text-foreground" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Share Signature</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem @click="handleCopySignature">
              <FontAwesomeIcon :icon="faCopy" fixed-width />
              Copy
            </DropdownMenuItem>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger class="gap-x-2">
                <FontAwesomeIcon :icon="faDownload" fixed-width />
                Download
              </DropdownMenuSubTrigger>

              <DropdownMenuSubContent>
                <DropdownMenuItem @click="handleDownloadSignature">
                  Full Signature
                </DropdownMenuItem>
                <DropdownMenuItem @click="handleDownloadThemeOnly"> Theme Only </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipTrigger>

      <TooltipContent>
        <p>Share your signature</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

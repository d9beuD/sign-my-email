<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSubContent,
} from './ui/dropdown-menu'
import { faPalette, faSwatchbook } from '@fortawesome/pro-regular-svg-icons'
import { Dialog, DialogTrigger } from './ui/dialog'
import DialogContentColorPrimary from './ui/theme/DialogContentColorPrimary.vue'
import { computed, ref, type Component } from 'vue'
import MenuItemColorPreview from './ui/theme/MenuItemColorPreview.vue'
import { useSignatureStore } from '@/stores/signature'
import DialogContentColorSecondary from './ui/theme/DialogContentColorSecondary.vue'

const signatureStore = useSignatureStore()

const availableDialogContents = {
  primaryColor: DialogContentColorPrimary,
  secondaryColor: DialogContentColorSecondary,
}

const currentDialog = ref<Component>(availableDialogContents.primaryColor)

const setDialog = (content: keyof typeof availableDialogContents) => {
  currentDialog.value = availableDialogContents[content]
}

const textColor = computed(() =>
  signatureStore.themeOptions.color.secondaryUnset
    ? undefined
    : signatureStore.themeOptions.color.secondary,
)
</script>

<template>
  <Dialog>
    <DropdownMenu>
      <DropdownMenuTrigger class="rounded-lg px-3 py-0.5 transition-colors hover:bg-gray-500/10">
        <FontAwesomeIcon :icon="faPalette" class="text-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Theme Options</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>
              <FontAwesomeIcon :icon="faSwatchbook" fixed-width />
              Colors
            </span>
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DialogTrigger as-child @click="setDialog('primaryColor')">
                <DropdownMenuItem class="items-center justify-between gap-x-3">
                  Primary Color
                  <MenuItemColorPreview :color="signatureStore.themeOptions.color.primary" />
                </DropdownMenuItem>
              </DialogTrigger>

              <DialogTrigger as-child @click="setDialog('secondaryColor')">
                <DropdownMenuItem class="items-center justify-between gap-x-3">
                  Secondary Color
                  <MenuItemColorPreview :color="textColor" />
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
    <component :is="currentDialog" />
  </Dialog>
</template>

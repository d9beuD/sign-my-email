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
import {
  faHorizontalRule,
  faImage,
  faPalette,
  faSwatchbook,
  faTextSize,
} from '@fortawesome/pro-regular-svg-icons'
import { Dialog, DialogTrigger } from './ui/dialog'
import DialogContentColorPrimary from './ui/theme/DialogContentColorPrimary.vue'
import { computed, ref, shallowRef, type Component } from 'vue'
import MenuItemColorPreview from './ui/theme/MenuItemColorPreview.vue'
import { useSignatureStore } from '@/stores/signature'
import DialogContentColorSecondary from './ui/theme/DialogContentColorSecondary.vue'
import DialogContentFontSizeBase from './ui/theme/DialogContentFontSizeBase.vue'
import DialogContentFontSizeTitle from './ui/theme/DialogContentFontSizeTitle.vue'
import DialogContentProfilePictureRadius from './ui/theme/DialogContentProfilePictureRadius.vue'
import DialogContentProfilePictureWidth from './ui/theme/DialogContentProfilePictureWidth.vue'
import DialogContentDividerWidth from './ui/theme/DialogContentDividerWidth.vue'
import DialogContentBusinessPictureRadius from './ui/theme/DialogContentBusinessPictureRadius.vue'
import DialogContentBusinessPictureWidth from './ui/theme/DialogContentBusinessPictureWidth.vue'

const signatureStore = useSignatureStore()

const availableDialogContents = {
  primaryColor: shallowRef(DialogContentColorPrimary),
  secondaryColor: shallowRef(DialogContentColorSecondary),
  fontSizeBase: shallowRef(DialogContentFontSizeBase),
  fontSizetitle: shallowRef(DialogContentFontSizeTitle),
  profilePictureRadius: shallowRef(DialogContentProfilePictureRadius),
  profilePictureWidth: shallowRef(DialogContentProfilePictureWidth),
  businessPictureRadius: shallowRef(DialogContentBusinessPictureRadius),
  businessPictureWidth: shallowRef(DialogContentBusinessPictureWidth),
  dividerWidth: shallowRef(DialogContentDividerWidth),
}

const currentDialog = ref<Component>(availableDialogContents.primaryColor)

const setDialog = (content: keyof typeof availableDialogContents) => {
  currentDialog.value = availableDialogContents[content].value
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
      <DropdownMenuTrigger
        class="rounded-lg px-3 py-0.5 transition-colors hover:bg-gray-500/10"
        aria-label="Edit signature theme"
      >
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

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>
              <FontAwesomeIcon :icon="faTextSize" fixed-width />
              Texts
            </span>
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DialogTrigger as-child @click="setDialog('fontSizetitle')">
                <DropdownMenuItem class="items-center justify-between gap-x-3">
                  Title Font Size
                  <small class="text-slate-500">
                    {{ signatureStore.themeOptions.text.fontSize.title }}px
                  </small>
                </DropdownMenuItem>
              </DialogTrigger>

              <DialogTrigger as-child @click="setDialog('fontSizeBase')">
                <DropdownMenuItem class="items-center justify-between gap-x-3">
                  Base Font Size
                  <small class="text-slate-500">
                    {{ signatureStore.themeOptions.text.fontSize.base }}px
                  </small>
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>
              <FontAwesomeIcon :icon="faImage" fixed-width />
              Images
            </span>
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuLabel>Profile Picture</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DialogTrigger as-child @click="setDialog('profilePictureWidth')">
                <DropdownMenuItem class="items-center justify-between gap-x-3">
                  Width
                  <small class="text-slate-500">
                    {{ signatureStore.themeOptions.image.personal.width }}px
                  </small>
                </DropdownMenuItem>
              </DialogTrigger>

              <DialogTrigger as-child @click="setDialog('profilePictureRadius')">
                <DropdownMenuItem class="items-center justify-between gap-x-3">
                  Border Radius
                  <small class="text-slate-500">
                    {{ signatureStore.themeOptions.image.personal.borderRadius }}px
                  </small>
                </DropdownMenuItem>
              </DialogTrigger>

              <DropdownMenuLabel class="pt-4">Business Picture</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DialogTrigger as-child @click="setDialog('businessPictureWidth')">
                <DropdownMenuItem class="items-center justify-between gap-x-3">
                  Width
                  <small class="text-slate-500">
                    {{ signatureStore.themeOptions.image.business.width }}px
                  </small>
                </DropdownMenuItem>
              </DialogTrigger>

              <DialogTrigger as-child @click="setDialog('businessPictureRadius')">
                <DropdownMenuItem class="items-center justify-between gap-x-3">
                  Border Radius
                  <small class="text-slate-500">
                    {{ signatureStore.themeOptions.image.business.borderRadius }}px
                  </small>
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>
              <FontAwesomeIcon :icon="faHorizontalRule" fixed-width />
              Dividers
            </span>
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DialogTrigger as-child @click="setDialog('dividerWidth')">
                <DropdownMenuItem class="items-center justify-between gap-x-3">
                  Width
                  <small class="text-slate-500">
                    {{ signatureStore.themeOptions.divider.width }}px
                  </small>
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

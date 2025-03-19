<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { faEnvelope, faLink, faLocationDot } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
import TemplateTextDecorated from '../TemplateTextDecorated.vue'
import { phoneIcons } from '..'

const signatureStore = useSignatureStore()

const businessAddress = computed(() =>
  signatureStore.businessInfo.address?.replace(/(?:\r\n|\r|\n)/g, '<br>'),
)

const phoneUrl = (number: string) => number.replace(/(?: )/g, '')
</script>

<template>
  <div v-if="signatureStore.personalInfo.email" style="margin-bottom: 8px">
    <TemplateTextDecorated>
      <template #icon>
        <FontAwesomeIcon :icon="faEnvelope" fixed-width />
      </template>

      <a :href="`mailto:${signatureStore.personalInfo.email}`">
        {{ signatureStore.personalInfo.email }}
      </a>
    </TemplateTextDecorated>
  </div>

  <template v-if="signatureStore.personalInfo.phoneNumbers.length">
    <div
      v-for="phone in signatureStore.personalInfo.phoneNumbers"
      :key="phone.number"
      style="margin-bottom: 8px"
    >
      <TemplateTextDecorated>
        <template #icon>
          <FontAwesomeIcon :icon="phoneIcons[phone.type]" fixed-width />
        </template>

        <a :href="`tel:${phoneUrl(phone.number)}`">{{ phone.number }}</a>
      </TemplateTextDecorated>
    </div>
  </template>

  <div v-if="signatureStore.businessInfo.address" style="margin-bottom: 8px">
    <TemplateTextDecorated>
      <template #icon>
        <FontAwesomeIcon :icon="faLocationDot" fixed-width />
      </template>

      <div v-html="businessAddress"></div>
    </TemplateTextDecorated>
  </div>

  <div v-if="signatureStore.businessInfo.website" style="margin-bottom: 8px">
    <TemplateTextDecorated>
      <template #icon>
        <FontAwesomeIcon :icon="faLink" fixed-width />
      </template>

      <a :href="signatureStore.businessInfo.website">
        {{ signatureStore.businessInfo.website }}
      </a>
    </TemplateTextDecorated>
  </div>
</template>

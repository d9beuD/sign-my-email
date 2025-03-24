import { templates } from '@/components/template'
import { cropImageFromDataURL } from '@/lib/utils'
import type { BusinessInfo, PersonalInfo, ThemeOptions, MailSignature, Templates } from '@/types'
import { computedAsync } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSignatureStore = defineStore('signature', () => {
  const personalInfo = ref<PersonalInfo>({
    name: 'John DOE',
    department: 'IT Department',
    jobTitle: 'Web Developer',
    email: 'john.doe@example.com',
    pictureUrl: 'https://placehold.co/100',
    pictureUrlTemp: null,
    phoneNumbers: [{ number: '+33 6 12 34 56 78', type: 'mobile' }],
  })

  const businessInfo = ref<BusinessInfo>({
    socialMedias: [],
    companyName: 'F Society Inc.',
    address: `123 5th Street,\n` + 'New York NY,\n' + 'USA',
    website: 'https://example.com',
    pictureUrl: 'https://placehold.co/200x50',
    pictureUrlTemp: null,
  })

  const template = ref<Templates | null>(null)

  const themeOptions = ref<ThemeOptions>({
    color: {
      primary: '#3b82f6',
      secondary: '#000000',
      secondaryUnset: true,
    },
    text: {
      fontSize: {
        base: 16,
        title: 16,
      },
    },
    image: {
      personal: {
        width: 100,
        borderRadius: 0,
      },
      business: {
        width: 200,
        borderRadius: 0,
      },
    },
    divider: {
      width: 2,
    },
  })

  const exportableSignature = computedAsync(async () => {
    return JSON.stringify({
      personalInfo: { ...personalInfo.value },
      businessInfo: { ...businessInfo.value },
      template: template.value,
      themeOptions: { ...themeOptions.value },
    }) as string
  })

  const exportableTheme = computedAsync(async () => {
    return JSON.stringify({ ...themeOptions.value }) as string
  })

  watch(
    [() => personalInfo.value.pictureUrlTemp, () => themeOptions.value.image.personal.width],
    async ([newUrl, newWidth]) => {
      if (!newUrl) {
        return
      }

      personalInfo.value.pictureUrl = await cropImageFromDataURL(newUrl, newWidth, false)
    },
  )

  watch(
    [() => businessInfo.value.pictureUrlTemp, () => themeOptions.value.image.business.width],
    async ([newUrl, newWidth]) => {
      if (!newUrl) {
        return
      }

      businessInfo.value.pictureUrl = await cropImageFromDataURL(newUrl, newWidth, true)
    },
  )

  return {
    personalInfo,
    businessInfo,
    template,
    themeOptions,
    exportableSignature,
    exportableTheme,
  }
})

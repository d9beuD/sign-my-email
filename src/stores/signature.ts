import { templates } from '@/components/template'
import { cropImageFromDataURL } from '@/lib/utils'
import type { Template, BusinessInfo, PersonalInfo, ThemeOptions } from '@/types'
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
    address: `123 5th Street,
    New York NY,
    USA`,
    website: 'https://example.com',
    pictureUrl: null,
    pictureUrlTemp: null,
  })

  const template = ref<Template>(templates[0])

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

  watch(
    [() => personalInfo.value.pictureUrlTemp, () => themeOptions.value.image.personal.width],
    async ([newUrl, newWidth]) => {
      if (!newUrl) {
        return
      }

      personalInfo.value.pictureUrl = await cropImageFromDataURL(newUrl, newWidth, false)
    },
  )

  return { personalInfo, businessInfo, template, themeOptions }
})

import { templates } from '@/components/template'
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
    phoneNumbers: [],
    pictureWidth: 100,
  })

  const businessInfo = ref<BusinessInfo>({
    pictureWidth: 0,
    socialMedias: [],
    companyName: 'F Society Inc.',
    address: `123 5th Street,
    New York NY,
    USA`,
    website: 'https://example.com',
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
        rounded: false,
        borderRadius: 0,
      },
      business: {
        width: 200,
        rounded: false,
        borderRadius: 0,
      },
    },
    separator: {
      width: 2,
    },
  })

  return { personalInfo, businessInfo, template, themeOptions }
})

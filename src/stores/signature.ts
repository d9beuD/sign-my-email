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
    ([newUrl, newWidth]) => {
      console.log('newUrl', newUrl)
      console.log('newWidth', newWidth)

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const rawImage = new Image()

      rawImage.src = newUrl as string

      rawImage.onload = () => {
        const cropWidth = themeOptions.value.image.personal.width
        const cropHeight = themeOptions.value.image.personal.width
        const startX = rawImage.width > rawImage.height ? (rawImage.width - rawImage.height) / 2 : 0
        const startY = rawImage.height > rawImage.width ? (rawImage.height - rawImage.width) / 2 : 0
        const size = Math.min(rawImage.width, rawImage.height)

        canvas.width = cropWidth
        canvas.height = cropHeight
        ctx?.drawImage(rawImage, startX, startY, size, size, 0, 0, cropWidth, cropHeight)
        personalInfo.value.pictureUrl = canvas.toDataURL()
      }
    },
  )

  return { personalInfo, businessInfo, template, themeOptions }
})

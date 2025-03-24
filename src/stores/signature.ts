import { phoneIcons, templates } from '@/components/template'
import { cropImageFromDataURL } from '@/lib/utils'
import {
  type BusinessInfo,
  type PersonalInfo,
  type ThemeOptions,
  type MailSignature,
  type Templates,
  type phoneNumber,
  type SocialMedia,
  SocialMediaType,
} from '@/types'
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

  const loadSignature = (signature: Partial<MailSignature>) => {
    if (signature.personalInfo) {
      loadPersonalInfo(signature.personalInfo)
    }

    if (signature.businessInfo) {
      loadBusinessInfo(signature.businessInfo)
    }

    if (signature.template && templates[signature.template]) {
      template.value = signature.template
    }

    if (signature.themeOptions) {
      loadTheme(signature.themeOptions)
    }
  }

  const loadPersonalInfo = (signaturePersonalInfo: Partial<PersonalInfo>) => {
    if (signaturePersonalInfo.name && typeof signaturePersonalInfo.name === 'string') {
      personalInfo.value.name = signaturePersonalInfo.name
    } else {
      personalInfo.value.name = ''
    }

    if (signaturePersonalInfo.department && typeof signaturePersonalInfo.department === 'string') {
      personalInfo.value.department = signaturePersonalInfo.department
    } else {
      personalInfo.value.department = ''
    }

    if (signaturePersonalInfo.jobTitle && typeof signaturePersonalInfo.jobTitle === 'string') {
      personalInfo.value.jobTitle = signaturePersonalInfo.jobTitle
    } else {
      personalInfo.value.jobTitle = ''
    }

    if (signaturePersonalInfo.email && typeof signaturePersonalInfo.email === 'string') {
      personalInfo.value.email = signaturePersonalInfo.email
    } else {
      personalInfo.value.email = ''
    }

    if (signaturePersonalInfo.pictureUrl && typeof signaturePersonalInfo.pictureUrl === 'string') {
      personalInfo.value.pictureUrl = signaturePersonalInfo.pictureUrl
    } else {
      personalInfo.value.pictureUrl = ''
    }

    if (
      signaturePersonalInfo.pictureUrlTemp &&
      typeof signaturePersonalInfo.pictureUrlTemp === 'string'
    ) {
      personalInfo.value.pictureUrlTemp = signaturePersonalInfo.pictureUrlTemp
    } else {
      personalInfo.value.pictureUrlTemp = ''
    }

    personalInfo.value.phoneNumbers = []
    if (
      signaturePersonalInfo.phoneNumbers &&
      Array.isArray(signaturePersonalInfo.phoneNumbers) &&
      signaturePersonalInfo.phoneNumbers.every((phoneNumber) => verifyPhoneNumberType(phoneNumber))
    ) {
      signaturePersonalInfo.phoneNumbers.forEach((phoneNumber) => {
        personalInfo.value.phoneNumbers.push({
          number: phoneNumber.number,
          type: Object.keys(phoneIcons).includes(phoneNumber.type) ? phoneNumber.type : 'phone',
        } as phoneNumber)
      })
    }
  }

  const verifyPhoneNumberType = (phoneNumber: Partial<phoneNumber>) =>
    typeof phoneNumber === 'object' &&
    phoneNumber.number &&
    typeof phoneNumber.number === 'string' &&
    phoneNumber.type &&
    typeof phoneNumber.type === 'string'

  const loadBusinessInfo = (signatureBusinessInfo: Partial<BusinessInfo>) => {
    if (
      signatureBusinessInfo.companyName &&
      typeof signatureBusinessInfo.companyName === 'string'
    ) {
      businessInfo.value.companyName = signatureBusinessInfo.companyName
    } else {
      businessInfo.value.companyName = ''
    }

    if (signatureBusinessInfo.address && typeof signatureBusinessInfo.address === 'string') {
      businessInfo.value.address = signatureBusinessInfo.address
    } else {
      businessInfo.value.address = ''
    }

    if (signatureBusinessInfo.website && typeof signatureBusinessInfo.website === 'string') {
      businessInfo.value.website = signatureBusinessInfo.website
    } else {
      businessInfo.value.website = ''
    }

    if (signatureBusinessInfo.pictureUrl && typeof signatureBusinessInfo.pictureUrl === 'string') {
      businessInfo.value.pictureUrl = signatureBusinessInfo.pictureUrl
    } else {
      businessInfo.value.pictureUrl = ''
    }

    if (
      signatureBusinessInfo.pictureUrlTemp &&
      typeof signatureBusinessInfo.pictureUrlTemp === 'string'
    ) {
      businessInfo.value.pictureUrlTemp = signatureBusinessInfo.pictureUrlTemp
    } else {
      businessInfo.value.pictureUrlTemp = ''
    }

    businessInfo.value.socialMedias = []
    if (
      signatureBusinessInfo.socialMedias &&
      Array.isArray(signatureBusinessInfo.socialMedias) &&
      signatureBusinessInfo.socialMedias.every((socialMedia) => verifySocialMediaType(socialMedia))
    ) {
      signatureBusinessInfo.socialMedias.forEach((socialMedia) => {
        businessInfo.value.socialMedias.push({
          type: socialMedia.type,
          url: socialMedia.url,
        })
      })
    }
  }

  const verifySocialMediaType = (socialMedia: Partial<SocialMedia>) => {
    return (
      typeof socialMedia === 'object' &&
      !!socialMedia.type &&
      typeof socialMedia.type === 'string' &&
      !!socialMedia.url
    )
  }
  const loadTheme = (theme: Partial<ThemeOptions>) => {
    if (theme.color) {
      if (theme.color.primary && typeof theme.color.primary === 'string') {
        themeOptions.value.color.primary = theme.color.primary
      }

      if (theme.color.secondary && typeof theme.color.secondary === 'string') {
        themeOptions.value.color.secondary = theme.color.secondary
      }

      if (theme.color.secondaryUnset && typeof theme.color.secondaryUnset === 'boolean') {
        themeOptions.value.color.secondaryUnset = theme.color.secondaryUnset
      }
    }

    if (theme.text) {
      if (theme.text.fontSize) {
        if (theme.text.fontSize.base && typeof theme.text.fontSize.base === 'number') {
          themeOptions.value.text.fontSize.base = theme.text.fontSize.base
        }

        if (theme.text.fontSize.title && typeof theme.text.fontSize.title === 'number') {
          themeOptions.value.text.fontSize.title = theme.text.fontSize.title
        }
      }
    }

    if (theme.image) {
      if (theme.image.personal) {
        if (theme.image.personal.width && typeof theme.image.personal.width === 'number') {
          themeOptions.value.image.personal.width = theme.image.personal.width
        }

        if (
          theme.image.personal.borderRadius &&
          typeof theme.image.personal.borderRadius === 'number'
        ) {
          themeOptions.value.image.personal.borderRadius = theme.image.personal.borderRadius
        }
      }

      if (theme.image.business) {
        if (theme.image.business.width && typeof theme.image.business.width === 'number') {
          themeOptions.value.image.business.width = theme.image.business.width
        }

        if (
          theme.image.business.borderRadius &&
          typeof theme.image.business.borderRadius === 'number'
        ) {
          themeOptions.value.image.business.borderRadius = theme.image.business.borderRadius
        }
      }
    }

    if (theme.divider) {
      if (theme.divider.width && typeof theme.divider.width === 'number') {
        themeOptions.value.divider.width = theme.divider.width
      }
    }
  }

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
    loadSignature,
  }
})

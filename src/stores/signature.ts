import type { Template, BusinessInfo, PersonalInfo } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSignatureStore = defineStore('signature', () => {
  const personalInfo = ref<PersonalInfo>({
    phoneNumbers: [],
    pictureWidth: 0,
  })

  const businessInfo = ref<BusinessInfo>({
    pictureWidth: 0,
    socialMedias: [],
  })

  const template = ref<Template>({
    name: '',
  })

  return { personalInfo, businessInfo, template }
})

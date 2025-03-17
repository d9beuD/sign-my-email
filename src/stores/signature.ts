import type { Template, BusinessInfo, PersonalInfo } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSignatureStore = defineStore('signature', () => {
  const personalInfo = ref<PersonalInfo>({
    name: 'John DOE',
    department: 'IT Department',
    jobTitle: 'Web Developer',
    email: 'john.doe@example.com',
    pictureUrl: 'https://placehold.co/400',
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

  const template = ref<Template>({
    name: '',
    template: undefined,
  })

  return { personalInfo, businessInfo, template }
})

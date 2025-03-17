import type { Component } from 'vue'

export interface MailSignature {
  personalInfo: PersonalInfo
  businessInfo: BusinessInfo
  template: Template
}

export interface PersonalInfo {
  name?: string
  jobTitle?: string
  department?: string
  email?: string
  phoneNumbers: string[]
  pictureUrl?: string
  pictureWidth: number
}

export interface BusinessInfo {
  pictureUrl?: string
  pictureWidth: number
  companyName?: string
  address?: string
  website?: string
  socialMedias: SocialMedia[]
}

export enum SocialMediaType {
  facebook,
  x,
  instagram,
  youtube,
  google,
  tiktok,
  pinterest,
  vimedo,
  medium,
  podcast,
  tripadvisor,
  patreon,
  flickr,
  imdb,
  linktree,
  threads,
  airbnb,
  whatsapp,
  spotify,
  messenger,
}

export interface SocialMedia {
  type: SocialMediaType
  url?: string
}

export interface Template {
  name: string
  template?: Component
}

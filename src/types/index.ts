import type { Component } from 'vue'

export interface MailSignature {
  personalInfo: PersonalInfo
  businessInfo: BusinessInfo
  template: Template
  themeOptions: ThemeOptions
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

export type ColorHex = `#${string}`
export type ColorRgb = `rgb(${number}, ${number}, ${number})`
export type ColorRgba = `rgb(${number}, ${number}, ${number}, ${number})`
export type Color = ColorHex | ColorRgb | ColorRgba | 'inherit'

export interface ThemeOptions {
  color: {
    primary: ColorHex
    secondary: ColorHex
    secondaryUnset: boolean
  }
  text: {
    fontSize: {
      base: number
      title: number
    }
  }
  image: {
    width: number
    rounded: boolean
    borderRadius: number | 'full'
  }
  separator: {
    width: number
  }
}

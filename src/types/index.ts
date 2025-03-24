import type { phoneIcons } from '@/components/template'
import type { Component } from 'vue'

export interface MailSignature {
  personalInfo: PersonalInfo
  businessInfo: BusinessInfo
  template: Templates | null
  themeOptions: ThemeOptions
}

export interface PersonalInfo {
  name?: string
  jobTitle?: string
  department?: string
  email?: string
  phoneNumbers: phoneNumber[]
  pictureUrl: string | null
  pictureUrlTemp: string | null
}

export interface BusinessInfo {
  pictureUrl: string | null
  pictureUrlTemp: string | null
  companyName?: string
  address?: string
  website?: string
  socialMedias: SocialMedia[]
}

export enum SocialMediaType {
  Airbnb,
  Facebook,
  Flickr,
  GitHub,
  Google,
  Imdb,
  Instagram,
  LinkedIn,
  Medium,
  Messenger,
  Patreon,
  Pinterest,
  Podcast,
  Spotify,
  Threads,
  Tiktok,
  // Tripadvisor,
  Vimeo,
  Whatsapp,
  X,
  Youtube,
}

export interface SocialMedia {
  type: SocialMediaType
  url?: string
}

export interface phoneNumber {
  number: string
  type: keyof typeof phoneIcons
}

export enum Templates {
  SignleColumn01,
}

export type TemplateList = Record<Templates, { name: string; template: Component }>

export type ColorHex = `#${string}`
export type ColorRgb = `rgb(${number}, ${number}, ${number})`
export type ColorRgba = `rgb(${number}, ${number}, ${number}, ${number})`
export type Color = ColorHex | ColorRgb | ColorRgba | 'inherit'

export interface ThemeImageOptions {
  width: number
  borderRadius: number
}

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
    personal: ThemeImageOptions
    business: ThemeImageOptions
  }
  divider: {
    width: number
  }
}

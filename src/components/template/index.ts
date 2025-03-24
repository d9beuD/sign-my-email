import { Templates, type TemplateList } from '@/types'
import { SocialMediaType } from '@/types'
import SingleColumn01 from './SingleColumn01.vue'
import SingleColumn02 from './SingleColumn02.vue'
import { markRaw, type Component } from 'vue'
import {
  faMobile,
  faPhone,
  faPhoneRotary,
  faPodcast,
  type IconDefinition,
} from '@fortawesome/pro-regular-svg-icons'
import {
  faAirbnb,
  faFacebook,
  faFacebookMessenger,
  faFlickr,
  faGithub,
  faGoogle,
  faImdb,
  faInstagram,
  faMedium,
  faPatreon,
  faPinterest,
  faSpotify,
  faThreads,
  faTiktok,
  faVimeo,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export const templates: TemplateList = {
  [Templates.SignleColumn01]: { name: 'Single Column 01', template: markRaw(SingleColumn01) },
}

export const phoneIcons = {
  phone: faPhone,
  mobile: faMobile,
  direct: faPhoneRotary,
}

export const socialMedias: Record<SocialMediaType, { name: string; icon: IconDefinition }> = {
  [SocialMediaType.Airbnb]: { name: 'Airbnb', icon: faAirbnb },
  [SocialMediaType.Facebook]: { name: 'Facebook', icon: faFacebook },
  [SocialMediaType.Flickr]: { name: 'Flickr', icon: faFlickr },
  [SocialMediaType.GitHub]: { name: 'GitHub', icon: faGithub },
  [SocialMediaType.Google]: { name: 'Google', icon: faGoogle },
  [SocialMediaType.Imdb]: { name: 'IMDb', icon: faImdb },
  [SocialMediaType.Instagram]: { name: 'Instagram', icon: faInstagram },
  [SocialMediaType.Medium]: { name: 'Medium', icon: faMedium },
  [SocialMediaType.Messenger]: { name: 'Messenger', icon: faFacebookMessenger },
  [SocialMediaType.Patreon]: { name: 'Patreon', icon: faPatreon },
  [SocialMediaType.Pinterest]: { name: 'Pinterest', icon: faPinterest },
  [SocialMediaType.Podcast]: { name: 'Podcast', icon: faPodcast },
  [SocialMediaType.Spotify]: { name: 'Spotify', icon: faSpotify },
  [SocialMediaType.Threads]: { name: 'Threads', icon: faThreads },
  [SocialMediaType.Tiktok]: { name: 'TikTok', icon: faTiktok },
  [SocialMediaType.Vimeo]: { name: 'Vimeo', icon: faVimeo },
  [SocialMediaType.Whatsapp]: { name: 'WhatsApp', icon: faWhatsapp },
  [SocialMediaType.X]: { name: 'X', icon: faXTwitter },
  [SocialMediaType.Youtube]: { name: 'YouTube', icon: faYoutube },
}

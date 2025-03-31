import { Templates, type TemplateList } from '@/types'
import { SocialMediaType } from '@/types'
import SingleColumn01 from './SingleColumn01.vue'
import { markRaw } from 'vue'
import {
  faGlobe,
  faMobile,
  faPhone,
  faPhoneRotary,
  faPodcast,
  type IconDefinition,
} from '@fortawesome/pro-regular-svg-icons'
import {
  faAirbnb,
  faFacebookF,
  faFacebookMessenger,
  faFlickr,
  faGithub,
  faGoogle,
  faImdb,
  faInstagram,
  faLinkedinIn,
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
import SingleColumn02 from './SingleColumn02.vue'
import TwoColumns01 from './TwoColumns01.vue'
import TwoColumns02 from './TwoColumns02.vue'
import Vertical01 from './Vertical01.vue'
import Vertical02 from './Vertical02.vue'

export const templates: TemplateList = {
  [Templates.SingleColumn01]: { name: 'Single Column 01', template: markRaw(SingleColumn01) },
  [Templates.SingleColumn02]: { name: 'Single Column 02', template: markRaw(SingleColumn02) },
  [Templates.TwoColumns01]: { name: 'Two Columns 01', template: markRaw(TwoColumns01) },
  [Templates.TwoColumns02]: { name: 'Two Columns 02', template: markRaw(TwoColumns02) },
  [Templates.Vertical01]: { name: 'Vertical 01', template: markRaw(Vertical01) },
  [Templates.Vertical02]: { name: 'Vertical 02', template: markRaw(Vertical02) },
}

export const phoneIcons = {
  phone: faPhone,
  mobile: faMobile,
  direct: faPhoneRotary,
}

export const socialMedias: Record<SocialMediaType, { name: string; icon: IconDefinition }> = {
  [SocialMediaType.Airbnb]: { name: 'Airbnb', icon: faAirbnb },
  [SocialMediaType.Facebook]: { name: 'Facebook', icon: faFacebookF },
  [SocialMediaType.Flickr]: { name: 'Flickr', icon: faFlickr },
  [SocialMediaType.GitHub]: { name: 'GitHub', icon: faGithub },
  [SocialMediaType.Google]: { name: 'Google', icon: faGoogle },
  [SocialMediaType.Imdb]: { name: 'IMDb', icon: faImdb },
  [SocialMediaType.Instagram]: { name: 'Instagram', icon: faInstagram },
  [SocialMediaType.LinkedIn]: { name: 'LinkedIn', icon: faLinkedinIn },
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

  [SocialMediaType.Other]: { name: 'Other', icon: faGlobe },
}

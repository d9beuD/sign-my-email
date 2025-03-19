import type { Template } from '@/types'
import SingleColumn01 from './SingleColumn01.vue'
import SingleColumn02 from './SingleColumn02.vue'
import { markRaw } from 'vue'
import {
  faMobile,
  faPhone,
  faPhoneRotary,
  type IconDefinition,
} from '@fortawesome/pro-regular-svg-icons'

export const templates: Template[] = [
  { name: 'Single Column 01', template: markRaw(SingleColumn01) },
  { name: 'Single Column 02', template: markRaw(SingleColumn02) },
]

export const phoneIcons = {
  phone: faPhone,
  mobile: faMobile,
  direct: faPhoneRotary,
}

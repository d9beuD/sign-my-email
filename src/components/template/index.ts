import type { Template } from '@/types'
import SingleColumn01 from './SingleColumn01.vue'
import SingleColumn02 from './SingleColumn02.vue'
import { markRaw } from 'vue'

export const templates: Template[] = [
  { name: 'Single Column 01', template: markRaw(SingleColumn01) },
  { name: 'Single Column 02', template: markRaw(SingleColumn02) },
]

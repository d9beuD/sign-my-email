<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { faEnvelope, faLink, faLocationDot } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
import TemplateBase from './TemplateBase.vue'

const signatureStore = useSignatureStore()
const iconCellStyle = 'padding-right: 8px; margin-right: 1px; vertical-align: top;'

const showFirstSection = computed(
  () =>
    signatureStore.personalInfo.name ||
    signatureStore.personalInfo.jobTitle ||
    signatureStore.personalInfo.department ||
    signatureStore.businessInfo.companyName,
)
const showSecondSection = computed(
  () =>
    signatureStore.personalInfo.email ||
    signatureStore.personalInfo.phoneNumbers.length ||
    signatureStore.businessInfo.website ||
    signatureStore.businessInfo.address,
)

const businessAddress = computed(() =>
  signatureStore.businessInfo.address?.replace(/(?:\r\n|\r|\n)/g, '<br>'),
)

const personalNameStyle = computed(
  () =>
    `font-weight: bold;` +
    `margin-bottom: 8px;` +
    `color: ${signatureStore.themeOptions.color.primary};` +
    `font-size: ${signatureStore.themeOptions.text.fontSize.title}px;` +
    `line-height: ${signatureStore.themeOptions.text.fontSize.title}px;`,
)
</script>

<template>
  <TemplateBase>
    <tr v-if="showFirstSection">
      <td>
        <div v-if="signatureStore.personalInfo.pictureUrl" style="padding-bottom: 8px">
          <img
            :src="signatureStore.personalInfo.pictureUrl"
            alt=""
            :style="`width: ${signatureStore.personalInfo.pictureWidth}px`"
          />
        </div>
        <div v-if="signatureStore.personalInfo.name" :style="personalNameStyle">
          {{ signatureStore.personalInfo.name }}
        </div>
        <div v-if="signatureStore.personalInfo.jobTitle">
          {{ signatureStore.personalInfo.jobTitle }}
        </div>
        <div v-if="signatureStore.personalInfo.department">
          {{ signatureStore.personalInfo.department }}
        </div>
        <div v-if="signatureStore.businessInfo.companyName">
          {{ signatureStore.businessInfo.companyName }}
        </div>
      </td>
    </tr>

    <tr v-if="showFirstSection && showSecondSection">
      <td style="padding: 16px 0">
        <div :style="`border-top: 2px solid ${signatureStore.themeOptions.color.primary};`"></div>
      </td>
    </tr>

    <tr v-if="showSecondSection">
      <td>
        <div v-if="signatureStore.personalInfo.email" style="margin-bottom: 8px">
          <table>
            <tbody>
              <tr>
                <td :style="iconCellStyle">
                  <FontAwesomeIcon :icon="faEnvelope" fixed-width />
                </td>
                <td>
                  {{ signatureStore.personalInfo.email }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="signatureStore.businessInfo.address" style="margin-bottom: 8px">
          <table>
            <tbody>
              <tr>
                <td :style="iconCellStyle">
                  <FontAwesomeIcon :icon="faLocationDot" fixed-width />
                </td>
                <td>
                  <div v-html="businessAddress"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="signatureStore.businessInfo.website" style="margin-bottom: 8px">
          <table>
            <tbody>
              <tr>
                <td :style="iconCellStyle">
                  <FontAwesomeIcon :icon="faLink" fixed-width />
                </td>
                <td>
                  <a :href="signatureStore.businessInfo.website">{{
                    signatureStore.businessInfo.website
                  }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </TemplateBase>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { faEnvelope, faLink, faLocationDot } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
import TemplateBase from './TemplateBase.vue'
import TemplateRow from './TemplateRow.vue'
import TemplateColumn from './TemplateColumn.vue'
import TemplateDivider from './TemplateDivider.vue'

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
    <TemplateRow v-if="showFirstSection">
      <TemplateColumn>
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
      </TemplateColumn>
    </TemplateRow>

    <TemplateRow v-if="showFirstSection && showSecondSection">
      <TemplateColumn style="padding: 16px 0">
        <TemplateDivider orientation="horizontal" />
      </TemplateColumn>
    </TemplateRow>

    <TemplateRow v-if="showSecondSection">
      <TemplateColumn>
        <div v-if="signatureStore.personalInfo.email" style="margin-bottom: 8px">
          <table>
            <tbody>
              <TemplateRow>
                <TemplateColumn :style="iconCellStyle">
                  <FontAwesomeIcon :icon="faEnvelope" fixed-width />
                </TemplateColumn>
                <TemplateColumn>
                  {{ signatureStore.personalInfo.email }}
                </TemplateColumn>
              </TemplateRow>
            </tbody>
          </table>
        </div>
        <div v-if="signatureStore.businessInfo.address" style="margin-bottom: 8px">
          <table>
            <tbody>
              <TemplateRow>
                <TemplateColumn :style="iconCellStyle">
                  <FontAwesomeIcon :icon="faLocationDot" fixed-width />
                </TemplateColumn>
                <TemplateColumn>
                  <div v-html="businessAddress"></div>
                </TemplateColumn>
              </TemplateRow>
            </tbody>
          </table>
        </div>
        <div v-if="signatureStore.businessInfo.website" style="margin-bottom: 8px">
          <table>
            <tbody>
              <TemplateRow>
                <TemplateColumn :style="iconCellStyle">
                  <FontAwesomeIcon :icon="faLink" fixed-width />
                </TemplateColumn>
                <TemplateColumn>
                  <a :href="signatureStore.businessInfo.website">{{
                    signatureStore.businessInfo.website
                  }}</a>
                </TemplateColumn>
              </TemplateRow>
            </tbody>
          </table>
        </div>
      </TemplateColumn>
    </TemplateRow>
  </TemplateBase>
</template>

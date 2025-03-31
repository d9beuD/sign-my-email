<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { computed } from 'vue'
import TemplateBase from './TemplateBase.vue'
import TemplateRow from './TemplateRow.vue'
import TemplateColumn from './TemplateColumn.vue'
import TemplateDivider from './TemplateDivider.vue'
import PersonalImage from './partials/PersonalImage.vue'
import DesignationInfo from './partials/DesignationInfo.vue'
import ContactDetails from './partials/ContactDetails.vue'
import SocialMedias from './partials/SocialMedias.vue'
import BusinessImage from './partials/BusinessImage.vue'

const signatureStore = useSignatureStore()

const showFirstSection = computed<boolean>(() => !!signatureStore.personalPictureUrl)
const showSecondSection = computed<boolean>(
  () => showDesignationInfo.value || showContactDetails.value,
)
const showThirdSection = computed<boolean>(
  () => !!signatureStore.businessInfo.socialMedias.length || !!signatureStore.businessPictureUrl,
)
const showFirstDivider = computed<boolean>(
  () => showFirstSection.value && (showSecondSection.value || showThirdSection.value),
)
const showDesignationInfo = computed<boolean>(
  () =>
    !!signatureStore.personalInfo.name ||
    !!signatureStore.personalInfo.jobTitle ||
    !!signatureStore.personalInfo.department ||
    !!signatureStore.businessInfo.companyName ||
    !!signatureStore.personalPictureUrl,
)
const showContactDetails = computed<boolean>(
  () =>
    !!signatureStore.personalInfo.email ||
    !!signatureStore.personalInfo.phoneNumbers.length ||
    !!signatureStore.businessInfo.website ||
    !!signatureStore.businessInfo.address,
)
const dividerSectionColspan = computed<number>(() =>
  showContactDetails.value && showDesignationInfo.value ? 2 : 1,
)
</script>

<template>
  <TemplateBase>
    <!-- First Section -->
    <TemplateRow v-if="showFirstSection">
      <TemplateColumn :colspan="dividerSectionColspan">
        <PersonalImage />
      </TemplateColumn>
    </TemplateRow>

    <!-- First Divider -->
    <TemplateRow v-if="showFirstDivider">
      <TemplateColumn :colspan="dividerSectionColspan" style="padding: 16px 0">
        <TemplateDivider orientation="horizontal" />
      </TemplateColumn>
    </TemplateRow>

    <!-- Second Section -->
    <TemplateRow v-if="showSecondSection">
      <TemplateColumn v-if="showDesignationInfo" style="padding-right: 32px">
        <DesignationInfo />
      </TemplateColumn>

      <TemplateColumn v-if="showContactDetails">
        <ContactDetails />
      </TemplateColumn>
    </TemplateRow>

    <!-- Second Divider -->
    <TemplateRow v-if="showSecondSection && showThirdSection">
      <TemplateColumn :colspan="dividerSectionColspan" style="padding: 16px 0">
        <TemplateDivider orientation="horizontal" />
      </TemplateColumn>
    </TemplateRow>

    <!-- Third Section -->
    <template v-if="showThirdSection">
      <TemplateRow>
        <TemplateColumn :colspan="dividerSectionColspan">
          <div v-if="signatureStore.businessPictureUrl" style="padding-bottom: 16px">
            <BusinessImage />
          </div>

          <div v-if="signatureStore.businessInfo.socialMedias.length">
            <SocialMedias />
          </div>
        </TemplateColumn>
      </TemplateRow>
    </template>
  </TemplateBase>
</template>

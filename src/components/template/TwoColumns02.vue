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

const showFirstSection = computed<boolean>(
  () => !!signatureStore.personalPictureUrl || showDesignationInfo.value,
)
const showSecondSection = computed<boolean>(
  () => !!signatureStore.businessPictureUrl || showContactDetails.value,
)
const showThirdSection = computed<boolean>(() => !!signatureStore.businessInfo.socialMedias.length)
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

        <div
          v-if="!!signatureStore.personalPictureUrl && showDesignationInfo"
          style="padding-top: 16px"
        ></div>

        <DesignationInfo />
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
      <TemplateColumn v-if="!!signatureStore.businessPictureUrl" style="padding-right: 16px">
        <BusinessImage />
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
          <SocialMedias />
        </TemplateColumn>
      </TemplateRow>
    </template>
  </TemplateBase>
</template>

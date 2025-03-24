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
  () =>
    !!signatureStore.personalInfo.name ||
    !!signatureStore.personalInfo.jobTitle ||
    !!signatureStore.personalInfo.department ||
    !!signatureStore.businessInfo.companyName ||
    !!signatureStore.personalInfo.pictureUrl,
)
const showSecondSection = computed<boolean>(
  () =>
    !!signatureStore.personalInfo.email ||
    !!signatureStore.personalInfo.phoneNumbers.length ||
    !!signatureStore.businessInfo.website ||
    !!signatureStore.businessInfo.address,
)
const showThirdSection = computed<boolean>(
  () =>
    !!signatureStore.businessInfo.socialMedias.length || !!signatureStore.businessInfo.pictureUrl,
)
const showFirstDivider = computed<boolean>(
  () => showFirstSection.value && (showSecondSection.value || showThirdSection.value),
)
</script>

<template>
  <TemplateBase>
    <!-- First Section -->
    <TemplateRow v-if="showFirstSection">
      <TemplateColumn>
        <div v-if="signatureStore.personalInfo.pictureUrl" style="padding-bottom: 16px">
          <PersonalImage />
        </div>
        <DesignationInfo />
      </TemplateColumn>
    </TemplateRow>

    <!-- First Divider -->
    <TemplateRow v-if="showFirstDivider">
      <TemplateColumn style="padding: 16px 0">
        <TemplateDivider orientation="horizontal" />
      </TemplateColumn>
    </TemplateRow>

    <!-- Second Section -->
    <TemplateRow v-if="showSecondSection">
      <TemplateColumn>
        <ContactDetails />
      </TemplateColumn>
    </TemplateRow>

    <!-- Second Divider -->
    <TemplateRow v-if="showSecondSection && showThirdSection">
      <TemplateColumn style="padding: 16px 0">
        <TemplateDivider orientation="horizontal" />
      </TemplateColumn>
    </TemplateRow>

    <!-- Third Section -->
    <template v-if="showThirdSection">
      <TemplateRow v-if="signatureStore.businessInfo.pictureUrl">
        <TemplateColumn>
          <BusinessImage />
          <div
            v-if="signatureStore.businessInfo.socialMedias.length"
            style="padding-bottom: 16px"
          ></div>
        </TemplateColumn>
      </TemplateRow>

      <TemplateRow>
        <SocialMedias />
      </TemplateRow>
    </template>
  </TemplateBase>
</template>

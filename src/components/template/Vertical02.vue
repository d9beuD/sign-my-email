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

const showDesignationInfo = computed<boolean>(
  () =>
    !!signatureStore.personalInfo.name ||
    !!signatureStore.personalInfo.jobTitle ||
    !!signatureStore.personalInfo.department ||
    !!signatureStore.businessInfo.companyName ||
    !!signatureStore.personalPictureUrl,
)
const showContactInfo = computed<boolean>(
  () =>
    !!signatureStore.personalInfo.email ||
    !!signatureStore.personalInfo.phoneNumbers.length ||
    !!signatureStore.businessInfo.website ||
    !!signatureStore.businessInfo.address,
)
const showSocialMedias = computed<boolean>(() => !!signatureStore.businessInfo.socialMedias.length)
</script>

<template>
  <TemplateBase>
    <TemplateRow>
      <TemplateColumn style="text-align: center">
        <div v-if="!!signatureStore.personalPictureUrl" style="padding-bottom: 16px">
          <PersonalImage />
        </div>

        <BusinessImage />
      </TemplateColumn>

      <TemplateColumn style="padding: 0 16px">
        <TemplateDivider orientation="vertical" />
      </TemplateColumn>

      <TemplateColumn>
        <DesignationInfo v-if="showDesignationInfo" />

        <div
          v-if="(showDesignationInfo && showContactInfo) || showSocialMedias"
          style="padding-bottom: 16px"
        ></div>

        <ContactDetails v-if="showContactInfo" />

        <div v-if="showContactInfo && showSocialMedias" style="padding-bottom: 16px"></div>

        <SocialMedias v-if="showSocialMedias" />
      </TemplateColumn>
    </TemplateRow>
  </TemplateBase>
</template>

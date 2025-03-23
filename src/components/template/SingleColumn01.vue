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

const signatureStore = useSignatureStore()

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
const showThirdSection = computed(() => signatureStore.businessInfo.socialMedias.length)
</script>

<template>
  <TemplateBase>
    <TemplateRow v-if="showFirstSection">
      <TemplateColumn>
        <div v-if="signatureStore.personalInfo.pictureUrl" style="padding-bottom: 8px">
          <PersonalImage />
        </div>
        <DesignationInfo />
      </TemplateColumn>
    </TemplateRow>

    <TemplateRow
      v-if="(showFirstSection && showSecondSection) || (showFirstSection && showThirdSection)"
    >
      <TemplateColumn style="padding: 16px 0">
        <TemplateDivider orientation="horizontal" />
      </TemplateColumn>
    </TemplateRow>

    <TemplateRow v-if="showSecondSection">
      <TemplateColumn>
        <ContactDetails />
      </TemplateColumn>
    </TemplateRow>

    <TemplateRow v-if="showSecondSection && showThirdSection">
      <TemplateColumn style="padding: 16px 0">
        <TemplateDivider orientation="horizontal" />
      </TemplateColumn>
    </TemplateRow>

    <TemplateRow v-if="showThirdSection">
      <SocialMedias />
    </TemplateRow>
  </TemplateBase>
</template>

<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import TemplateColumn from '../TemplateColumn.vue'
import TemplateGrid from '../TemplateGrid.vue'
import TemplateRow from '../TemplateRow.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { socialMedias } from '..'

const signatureStore = useSignatureStore()
</script>

<template>
  <TemplateGrid>
    <TemplateRow>
      <TemplateColumn
        v-for="(socialMedia, index) in signatureStore.businessInfo.socialMedias"
        :key="index"
        class="pr-2"
      >
        <a :href="socialMedia.url">
          <FontAwesomeIcon :icon="socialMedias[socialMedia.type].icon" size="xl" />
        </a>
      </TemplateColumn>
    </TemplateRow>
  </TemplateGrid>
</template>

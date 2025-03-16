<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { faShapes, faSignature, faSuitcase, faUser } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import FormGroup from './FormGroup.vue'
import SidebarSection from './SidebarSection.vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { templates } from './template'

const signatureStore = useSignatureStore()
const availableTemplates = templates
</script>

<template>
  <div class="flex flex-col space-y-4">
    <h1 class="flex items-center gap-x-2 text-lg font-bold text-primary">
      <FontAwesomeIcon :icon="faSignature" size="lg" />
      <span>Sign My Email</span>
    </h1>

    <SidebarSection :icon="faShapes" title="Template">
      <FormGroup for="templateSelector" label="Template">
        <Select v-model="signatureStore.template">
          <SelectTrigger>
            <SelectValue placeholder="Select a template" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Templates</SelectLabel>
              <template v-for="template in availableTemplates" :key="template.name">
                <SelectItem :value="template">{{ template.name }}</SelectItem>
              </template>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormGroup>
    </SidebarSection>

    <SidebarSection :icon="faUser" title="Personal Info">
      <FormGroup for="personalName" label="Name">
        <Input v-model="signatureStore.personalInfo.name" placeholder="Name" id="personalName" />
      </FormGroup>

      <FormGroup for="personalJobTitle" label="Job Title">
        <Input
          v-model="signatureStore.personalInfo.jobTitle"
          placeholder="Job Title"
          id="personalJobTitle"
        />
      </FormGroup>

      <FormGroup for="personalDepartment" label="Department">
        <Input
          v-model="signatureStore.personalInfo.department"
          placeholder="Department"
          id="personalDepartment"
        />
      </FormGroup>

      <FormGroup for="personalEmailAddress" label="Email Address">
        <Input
          v-model="signatureStore.personalInfo.email"
          placeholder="Email Address"
          id="personalEmailAddress"
          type="email"
        />
      </FormGroup>
    </SidebarSection>

    <SidebarSection :icon="faSuitcase" title="Business Info">
      <FormGroup for="businessName" label="Company Name">
        <Input
          v-model="signatureStore.businessInfo.companyName"
          placeholder="Company Name"
          id="businessName"
        />
      </FormGroup>

      <FormGroup for="businessAddress" label="Address">
        <Textarea
          v-model="signatureStore.businessInfo.address"
          placeholder="Address"
          id="businessAddress"
          rows="3"
        />
      </FormGroup>

      <FormGroup for="businessWebsite" label="Website">
        <Input
          v-model="signatureStore.businessInfo.website"
          placeholder="Website"
          id="businessWebsite"
        />
      </FormGroup>
    </SidebarSection>
  </div>
</template>

<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import { faSignature, faSuitcase, faUser } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const signatureStore = useSignatureStore()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <h1 class="flex items-center gap-x-2 text-lg font-bold text-primary">
      <FontAwesomeIcon :icon="faSignature" />
      <span>Sign My Email</span>
    </h1>

    <section>
      <h2 class="mb-2 border-b pb-2">
        <FontAwesomeIcon :icon="faUser" />
        Personal Info
      </h2>

      <div class="mb-4">
        <Label for="personalName">Name</Label>
        <Input v-model="signatureStore.personalInfo.name" placeholder="Name" id="personalName" />
      </div>

      <div class="mb-4">
        <Label for="personalJobTitle">Job Title</Label>
        <Input
          v-model="signatureStore.personalInfo.jobTitle"
          placeholder="Job Title"
          id="personalJobTitle"
        />
      </div>

      <div class="mb-4">
        <Label for="personalDepartment">Department</Label>
        <Input
          v-model="signatureStore.personalInfo.department"
          placeholder="Department"
          id="personalDepartment"
        />
      </div>

      <div class="mb-4">
        <Label for="personalEmailAddress">Email Address</Label>
        <Input
          v-model="signatureStore.personalInfo.email"
          placeholder="Email Address"
          id="personalEmailAddress"
          type="email"
        />
      </div>
    </section>

    <section>
      <h2 class="mb-2 border-b pb-2">
        <FontAwesomeIcon :icon="faSuitcase" />
        Business Info
      </h2>

      <div class="mb-4">
        <Label for="businessName">Company Name</Label>
        <Input
          v-model="signatureStore.businessInfo.companyName"
          placeholder="Company Name"
          id="businessName"
        />
      </div>

      <div class="mb-4">
        <Label for="businessAddress">Address</Label>
        <Textarea
          v-model="signatureStore.businessInfo.address"
          placeholder="Address"
          id="businessAddress"
          rows="3"
        />
      </div>

      <div class="mb-4">
        <Label for="businessWebsite">Website</Label>
        <Input
          v-model="signatureStore.businessInfo.website"
          placeholder="Website"
          id="businessWebsite"
        />
      </div>
    </section>
  </div>
</template>

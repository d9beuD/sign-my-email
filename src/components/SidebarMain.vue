<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import {
  faMinusCircle,
  faPlusCircle,
  faShapes,
  faSuitcase,
  faUser,
} from '@fortawesome/pro-regular-svg-icons'
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
import { phoneIcons, templates } from './template'
import { Button } from './ui/button'
import AppIcon from '@/icons/AppIcon.vue'

const signatureStore = useSignatureStore()
const availableTemplates = templates

const onProfilePictureChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  const files = input.files

  if (null === files || files.length < 1) {
    signatureStore.personalInfo.pictureUrl = `https://placehold.co/${signatureStore.personalInfo.pictureWidth}`
    return
  }

  const reader = new FileReader()
  reader.addEventListener(
    'load',
    () => {
      signatureStore.personalInfo.pictureUrlTemp = reader.result as string
    },
    false,
  )
  reader.readAsDataURL(files[0])
}

const deletePhoneNumber = (index: number) =>
  signatureStore.personalInfo.phoneNumbers.splice(index, 1)

const addPhoneNumber = () =>
  signatureStore.personalInfo.phoneNumbers.push({ type: 'phone', number: '' })
</script>

<template>
  <div class="flex flex-col space-y-4">
    <h1 class="flex items-center gap-x-2 text-lg font-bold text-primary">
      <AppIcon class="size-8" />
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
      <FormGroup for="personalPicture" label="Profile Picture">
        <Input
          placeholder="Profile Picture"
          id="personalPicture"
          type="file"
          accept="image/*"
          @change="onProfilePictureChange"
        />
      </FormGroup>

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

      <FormGroup label="Telephone Numbers">
        <div class="flex flex-col">
          <div
            v-for="(phone, index) in signatureStore.personalInfo.phoneNumbers"
            :key="index"
            class="group flex"
          >
            <div class="w-4/12">
              <Select v-model="phone.type">
                <SelectTrigger
                  class="gap-x-2 rounded-r-none group-[&:not(:first-child)]:rounded-t-none group-[&:not(:last-child)]:rounded-b-none group-[&:not(:first-child)]:border-t-0"
                >
                  <SelectValue placeholder="Icon" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem
                    v-for="(icon, key, index) in phoneIcons"
                    :key="key + index"
                    :value="key"
                  >
                    <FontAwesomeIcon :icon="phoneIcons[key]" fixed-width />
                    <span class="sr-only">{{
                      key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
                    }}</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input
              v-model="phone.number"
              class="w-8/12 rounded-l-none border-l-0 group-[&:not(:first-child)]:rounded-t-none group-[&:not(:last-child)]:rounded-b-none group-[&:not(:first-child)]:border-t-0"
            />

            <Button
              variant="link"
              size="icon"
              class="rounded-full px-4 text-destructive hover:text-destructive/80"
              @click="deletePhoneNumber(index)"
            >
              <FontAwesomeIcon :icon="faMinusCircle" fixed-width />
            </Button>
          </div>
        </div>
        <div class="flex justify-end">
          <Button
            variant="link"
            size="icon"
            class="rounded-full px-4 text-green-600 hover:text-green-600/80"
            @click="addPhoneNumber"
          >
            <FontAwesomeIcon :icon="faPlusCircle" fixed-width />
          </Button>
        </div>
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

<script setup lang="ts">
import { useSignatureStore } from '@/stores/signature'
import {
  faMinusCircle,
  faPlusCircle,
  faShapes,
  faSuitcase,
  faUser,
  faXmarkCircle,
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
import { phoneIcons, socialMedias, templates } from './template'
import { Button } from './ui/button'
import AppIcon from '@/icons/AppIcon.vue'
import { SocialMediaType } from '@/types'
import { convertImageToDataURL } from '@/lib/utils'

const signatureStore = useSignatureStore()
const availableTemplates = templates

const handlePictureChange = async (e: Event) => {
  const input = e.target as HTMLInputElement
  const files = input.files

  if (null === files || files.length < 1) {
    return null
  }

  return await convertImageToDataURL(files[0])
}

const onProfilePictureChange = async (e: Event) =>
  (signatureStore.personalInfo.pictureUrlTemp = await handlePictureChange(e))

const onBusinessPictureChange = async (e: Event) =>
  (signatureStore.businessInfo.pictureUrlTemp = await handlePictureChange(e))

const deletePhoneNumber = (index: number) =>
  signatureStore.personalInfo.phoneNumbers.splice(index, 1)

const addPhoneNumber = () =>
  signatureStore.personalInfo.phoneNumbers.push({ type: 'phone', number: '' })

const deleteSocialMedia = (index: number) =>
  signatureStore.businessInfo.socialMedias.splice(index, 1)

const addSocialMedia = () =>
  signatureStore.businessInfo.socialMedias.push({ type: SocialMediaType.Airbnb, url: '' })

const clearProfileImage = () => {
  signatureStore.personalInfo.pictureUrl = null
  signatureStore.personalInfo.pictureUrlTemp = null
}

const clearBusinessImage = () => {
  signatureStore.businessInfo.pictureUrl = null
  signatureStore.businessInfo.pictureUrlTemp = null
}
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
          <SelectTrigger aria-label="Select a template">
            <SelectValue placeholder="Select a template" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Templates</SelectLabel>
              <template v-for="(template, index) in availableTemplates" :key="index">
                <SelectItem :value="index">{{ template.name }}</SelectItem>
              </template>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormGroup>
    </SidebarSection>

    <SidebarSection :icon="faUser" title="Personal Info">
      <FormGroup for="personalPicture" label="Profile Picture">
        <div class="flex">
          <Input
            placeholder="Profile Picture"
            id="personalPicture"
            type="file"
            accept="image/*"
            @change="onProfilePictureChange"
          />
          <Button
            variant="link"
            size="icon"
            class="rounded-full px-4"
            aria-label="Clear image"
            @click="clearProfileImage"
          >
            <FontAwesomeIcon :icon="faXmarkCircle" />
          </Button>
        </div>
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
                  aria-label="Select phone number type"
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
              :aria-label="`Phone number ${index}`"
            />

            <Button
              variant="link"
              size="icon"
              class="rounded-full px-4 text-destructive hover:text-destructive/80"
              @click="deletePhoneNumber(index)"
              aria-label="Remove phone number"
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
            aria-label="Add new phone number"
          >
            <FontAwesomeIcon :icon="faPlusCircle" fixed-width />
          </Button>
        </div>
      </FormGroup>
    </SidebarSection>

    <SidebarSection :icon="faSuitcase" title="Business Info">
      <FormGroup for="businessPicture" label="Business Picture">
        <div class="flex">
          <Input
            placeholder="Business Picture"
            id="businessPicture"
            type="file"
            accept="image/*"
            @change="onBusinessPictureChange"
          />
          <Button
            variant="link"
            size="icon"
            class="rounded-full px-4"
            aria-label="Clear image"
            @click="clearBusinessImage"
          >
            <FontAwesomeIcon :icon="faXmarkCircle" />
          </Button>
        </div>
      </FormGroup>

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

      <FormGroup label="Social Networks">
        <div class="flex flex-col">
          <div
            v-for="(socialMedia, index) in signatureStore.businessInfo.socialMedias"
            :key="index"
            class="group flex"
          >
            <div class="">
              <Select v-model="socialMedia.type">
                <SelectTrigger
                  aria-label="Select social media type"
                  class="gap-x-2 rounded-r-none group-[&:not(:first-child)]:rounded-t-none group-[&:not(:last-child)]:rounded-b-none group-[&:not(:first-child)]:border-t-0"
                >
                  <SelectValue placeholder="Icon" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem
                    v-for="(value, key, index) in socialMedias"
                    :key="key + index"
                    :value="key"
                  >
                    <div class="flex items-center gap-x-2">
                      <FontAwesomeIcon :icon="value.icon" fixed-width />
                      <span>{{ value.name }}</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input
              v-model="socialMedia.url"
              class="w-8/12 grow rounded-l-none border-l-0 group-[&:not(:first-child)]:rounded-t-none group-[&:not(:last-child)]:rounded-b-none group-[&:not(:first-child)]:border-t-0"
              placeholder="https://..."
              :aria-label="`Social media URL ${index}`"
            />

            <Button
              variant="link"
              size="icon"
              class="rounded-full px-4 text-destructive hover:text-destructive/80"
              @click="deleteSocialMedia(index)"
              aria-label="Remove social media"
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
            @click="addSocialMedia"
            aria-label="Add social media"
          >
            <FontAwesomeIcon :icon="faPlusCircle" fixed-width />
          </Button>
        </div>
      </FormGroup>
    </SidebarSection>
  </div>
</template>

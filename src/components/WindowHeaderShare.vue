<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShare } from '@fortawesome/pro-regular-svg-icons'
import { Button } from './ui/button'

const share = () => {
  const source = document.querySelector('#rendered-signature')

  if (!source) {
    return
  }

  // Clone to avoid editing source
  const clone = source.cloneNode(true)
  const div = document.createElement('div')

  // Give the div an ID to query it later
  div.setAttribute('id', 'temp-rendered-signature')
  div.style.display = 'none'
  div.append(clone)

  document.body.append(div)

  const icons = document.querySelectorAll('#temp-rendered-signature svg.svg-inline--fa')

  icons.forEach((icon) => {
    const styles = window.getComputedStyle(icon)
    let styleString = ''

    for (let i = 0; i < styles.length; i++) {
      const property = styles[i]

      // Exclude some styles to reduce signature size
      if (
        property.startsWith('-') ||
        property.startsWith('animation') ||
        property.startsWith('background') ||
        property.startsWith('border') ||
        property.startsWith('column') ||
        property.startsWith('contain') ||
        property.startsWith('counter') ||
        property.startsWith('grid') ||
        property.startsWith('mask') ||
        property.startsWith('over') ||
        property.startsWith('scroll') ||
        property.startsWith('shape') ||
        property.startsWith('stroke') ||
        property.startsWith('trans')
      ) {
        continue
      }

      styleString += `${property}:${styles.getPropertyValue(property)};`
    }

    icon.setAttribute('style', styleString)
  })

  // Put the signature HTML into a blob so it can be pasted and interpreted as HTML by mail clients
  const clipboardItem = new ClipboardItem({
    'text/html': new Blob([div.firstElementChild?.innerHTML ?? ''], { type: 'text/html' }),
  })
  navigator.clipboard.write([clipboardItem])

  // Remove clone before leaving
  document.body.removeChild(div)
}
</script>

<template>
  <Button
    class="h-7 rounded-lg px-3 py-0.5 leading-6 transition-colors hover:bg-gray-500/10"
    variant="ghost"
    @click="share"
  >
    <FontAwesomeIcon :icon="faShare" class="text-foreground" />
  </Button>
</template>

import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value = typeof updaterOrValue === 'function' ? updaterOrValue(ref.value) : updaterOrValue
}

export const convertImageToDataURL = (image: File) =>
  new Promise<string>((resolve) => {
    const reader = new FileReader()

    reader.addEventListener(
      'load',
      () => {
        resolve(reader.result as string)
      },
      false,
    )

    reader.readAsDataURL(image)
  })

/**
 * Resize and crop an image from a data URL.
 */
export const cropImageFromDataURL = (dataURL: string, width: number, keepRatio: boolean = true) =>
  new Promise<string>((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const rawImage = new Image()

    rawImage.src = dataURL as string

    rawImage.onload = () => {
      const newWidth = Math.min(width * 1.5, rawImage.width)
      const factor = rawImage.width / newWidth
      const cropWidth = newWidth
      const cropHeight = keepRatio ? rawImage.height / factor : newWidth

      const startX = keepRatio
        ? 0
        : rawImage.width > rawImage.height
          ? (rawImage.width - rawImage.height) / 2
          : 0
      const startY = keepRatio
        ? 0
        : rawImage.height > rawImage.width
          ? (rawImage.height - rawImage.width) / 2
          : 0
      const sizeX = keepRatio
        ? rawImage.width
        : rawImage.width > rawImage.height
          ? rawImage.height
          : rawImage.width
      const sizeY = keepRatio
        ? rawImage.height
        : rawImage.height > rawImage.width
          ? rawImage.width
          : rawImage.height

      canvas.width = cropWidth
      canvas.height = cropHeight
      ctx?.drawImage(rawImage, startX, startY, sizeX, sizeY, 0, 0, cropWidth, cropHeight)

      resolve(canvas.toDataURL())
    }
  })

export const downloadFile = (filename: string, data: string) => {
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')

  a.href =
    typeof URL.createObjectURL === 'function'
      ? URL.createObjectURL(blob)
      : window.webkitURL.createObjectURL(blob)
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export const sanitizeSignature = (signature: Element): Element => {
  // Clone to avoid editing source
  const clone = signature.cloneNode(true)
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

  return document.querySelector('#temp-rendered-signature') as Element
}

export const copySignature = (signature: Element, deleteAfter: boolean = true) =>
  new Promise<void>((resolve) => {
    // Put the signature HTML into a blob so it can be pasted and interpreted as HTML by mail clients
    const clipboardItem = new ClipboardItem({
      'text/html': new Blob([signature.firstElementChild?.innerHTML ?? ''], { type: 'text/html' }),
      'text/plain': new Blob([signature.firstElementChild?.innerHTML ?? ''], {
        type: 'text/plain',
      }),
    })

    navigator.clipboard.write([clipboardItem])

    // Remove clone before leaving
    if (deleteAfter) {
      document.body.removeChild(signature)
    }

    resolve()
  })

export const importFile = (file: File) =>
  new Promise<string>((resolve) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result as string)
    }

    reader.readAsText(file)
  })

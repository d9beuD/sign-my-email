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
      const factor = rawImage.width / width
      const cropWidth = width
      const cropHeight = keepRatio ? rawImage.height / factor : width

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

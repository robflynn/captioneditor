import { Caption } from '@lib/caption'

export function createCaption(text = "", options = {} ) {
  return new Caption(
    text,
    options
  )
}

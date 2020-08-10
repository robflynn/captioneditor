import { Position } from '@lib/types.ts'
import { v4 as uuidv4 } from 'uuid'
import { Caption } from '@lib/caption'

export function createCaption(text = "", options = {} ) {
  let defaults = { id: uuidv4(), horizontal: Position.center, vertical: Position.bottom }
  let data = Object.assign(defaults, options)

  return new Caption(
    text,
    data
  )
}

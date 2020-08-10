import { Position } from '@lib/types.ts'
import { v4 as uuidv4 } from 'uuid'

export function createCaption(text = "", options = {} ) {
  let defaults = { id: uuidv4(), horizontal: Position.center, vertical: Position.bottom }
  let data = Object.assign(defaults, options)

  return {
    id: data.id,
    text: text,
    horizontal: data.horizontal,
    vertical: data.vertical
  }
}

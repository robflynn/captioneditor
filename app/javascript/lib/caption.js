import { v4 as uuidv4 } from 'uuid'
import { Position } from "@lib/types.ts"

export class Caption {
  constructor(text = "", { horizontal, vertical, inTime, outTime } = {}) {
    this.id = uuidv4()

    this.horizontal = horizontal || Position.center
    this.vertical = vertical || Position.bottom
    this.text = text
    this.inTime = inTime || 0
    this.outTime = outTime || 0
  }
}
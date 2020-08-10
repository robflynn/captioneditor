import { Position } from "@lib/types.ts"

export class Caption {
  constructor(text = "", { horizontal, vertical } = {}) {
    this.horizontal = horizontal || Position.center
    this.vertical = vertical || Position.bottom
    this.text = text
  }
}
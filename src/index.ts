

import cheerio from 'cheerio'
import { extractItem } from './extractItem'

export function extract(html: string, model: any, options?: CheerioOptionsInterface): object {
  // Using Object.assign instead of object spread removes the need of null checks.

  let deserializedModel

  try {
    deserializedModel = JSON.parse(JSON.stringify(model))
  } catch (error) {
    throw `The model cannot be serialized; ${error.messag}`
  }
  const $ = cheerio.load(html, options)

  return extractItem($, $.root(), deserializedModel)
}


import { en } from './en'
import { fr } from './fr'
import { bn } from './bn'
import { it } from './it'
import { hi } from './hi'
import { es } from './es'
import { de } from './de'
import { ar } from './ar'
import { zh } from './zh'
import { ja } from './ja'

export const translations = {
  en,
  fr,
  bn,
  it,
  hi,
  es,
  de,
  ar,
  zh,
  ja
}

export type TranslationKey = keyof typeof en
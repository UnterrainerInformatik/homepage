import variables from '@/locales/variables'

import mainEn from '@/locales/main_en'
import globalEn from '@/locales/global_en'
import aboutEn from '@/locales/parts/about_en'
import throbaxEn from '@/locales/parts/throbax_en'

import mainDe from '@/locales/main_de'
import globalDe from '@/locales/global_de'
import aboutDe from '@/locales/parts/about_de'
import throbaxDe from '@/locales/parts/throbax_de'

function Lang (defaults, options = {}) {
  return Object.assign({}, defaults, options)
}

const en = {
  resource: variables,
  global: globalEn,
  main: mainEn,
  throbax: throbaxEn,
  about: aboutEn
}

const de = Lang(en, {
  resource: variables,
  global: globalDe,
  main: mainDe,
  throbax: throbaxDe,
  about: aboutDe
})

export default {
  en: en,
  de: de
}

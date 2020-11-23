import variables from '@/locales/variables'

import globalEn from '@/locales/global_en'
import mainEn from '@/locales/parts/main_en'
import aboutEn from '@/locales/parts/about_en'
import throbaxEn from '@/locales/parts/throbax_en'
import throbaxScreenshotsEn from '@/locales/parts/throbaxScreenshots_en'
import codingEn from '@/locales/parts/coding_en'
import codeEn from '@/locales/parts/code_en'
import codeCEn from '@/locales/parts/codeC_en'
import codeJavaEn from '@/locales/parts/codeJava_en'
import gitEn from '@/locales/parts/git_en'

import globalDe from '@/locales/global_de'
import mainDe from '@/locales/parts/main_de'
import aboutDe from '@/locales/parts/about_de'
import throbaxDe from '@/locales/parts/throbax_de'
import throbaxScreenshotsDe from '@/locales/parts/throbaxScreenshots_de'
import codingDe from '@/locales/parts/coding_de'
import codeDe from '@/locales/parts/code_de'
import codeCDe from '@/locales/parts/codeC_de'
import codeJavaDe from '@/locales/parts/codeJava_de'
import gitDe from '@/locales/parts/git_de'

function Lang (defaults, options = {}) {
  return Object.assign({}, defaults, options)
}

const en = {
  resource: variables,
  global: globalEn,
  main: mainEn,
  throbax: throbaxEn,
  throbaxScreenshots: throbaxScreenshotsEn,
  coding: codingEn,
  code: codeEn,
  codeC: codeCEn,
  codeJava: codeJavaEn,
  git: gitEn,
  about: aboutEn
}

const de = Lang(en, {
  resource: variables,
  global: globalDe,
  main: mainDe,
  throbax: throbaxDe,
  throbaxScreenshots: throbaxScreenshotsDe,
  coding: codingDe,
  code: codeDe,
  codeC: codeCDe,
  codeJava: codeJavaDe,
  git: gitDe,
  about: aboutDe
})

export default {
  en: en,
  de: de
}

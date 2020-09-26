// @ts-nocheck

import { md } from "./plugins/md"
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

const modifyImport = (oldStr, updateStr) => {
    const arr = oldStr.split('\r\n')
    const targetIndex = arr.findIndex(e => e.endsWith(".vue'"))
    const targetStr = arr.find(e => e.endsWith(".vue'"))
    const indexStart = targetStr.indexOf("from") + 5
    arr[targetIndex] = targetStr.replace(targetStr.slice(indexStart), updateStr)
    return arr.join('\r\n')
}

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const title = parsed.children[0].content
      const locSource = file.split(parsed.loc.source)
      locSource[1] = modifyImport(locSource[1], "'violateer-ui'")
      const main = locSource.join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${
          JSON.stringify(title)
        }
      }`.trim()
    }
  }
}; 
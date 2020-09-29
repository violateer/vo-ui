// @ts-nocheck

import { md } from "./plugins/md"
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

const modifyImport = (oldStr, updateStr) => {
    const oldStrsArr = []
    const arr = oldStr.split('\r\n')
    arr.map((e, index) => {
        if(e.endsWith(".vue'") || e.endsWith("openDialog'")) {
            const tempObj = {
                value: e,
                index: index,
                replaceStartIndex: e.indexOf("from") + 5
            }
            oldStrsArr.push(tempObj)
        }
    })
    oldStrsArr.map(e => {
        arr[e.index] = e.value.replace(e.value.slice(e.replaceStartIndex), updateStr)
    })
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
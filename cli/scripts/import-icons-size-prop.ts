// change to: "import { client } from '@figma/code-connect'"
import { client } from '../src/react/index_react'
import fs from 'fs'
import path from 'path'

async function generateIconsWithSizeProp() {
  // fetch components from a figma file. If the `node-id` query parameter is used,
  // only components within those frames will be included. This is useful if your
  // file is very large, as this will speed up the query by a lot
  let components = await client.getComponents(
    'https://figma.com/file/ABc123IjkLmnOPq?node-id=41-41',
  )

  // Map from figma to React component names
  components = components.map((component) => ({
    ...component,
    name: component.name
      .split(/[.-]/g)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(''),
  }))

  const uniqueNames = new Set([...components.map((c) => c.name)])

  const file = 'src/components/icons.figma.tsx'
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(
    file,
    `\
import figma from '@figma/code-connect'

import {
${Array.from(uniqueNames)
  .map((iconName) => `  ${iconName},`)
  .join('\n')}
} from './Icons'

const props = {
  size: figma.enum('Size', {
    "12": 12,
    "16": 16,
    "24": 24,
  })
}

${components
  .map(
    (c) => `figma.connect(${c.name}, '${c.figmaUrl}', {
  props,
  example: ({ size }) => <${c.name} size={size} />
})`,
  )
  .join('\n')}
`,
  )
}

generateIconsWithSizeProp()

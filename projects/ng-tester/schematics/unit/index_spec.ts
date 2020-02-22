import * as path from 'path'

import { Tree } from '@angular-devkit/schematics'
import { SchematicTestRunner } from '@angular-devkit/schematics/testing'

const collectionPath = path.join(__dirname, '../collection.json')

describe('unit-test', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath)
    const tree = runner.runSchematic('unit-test', {}, Tree.empty())

    expect(tree.files).toEqual([])
  })
})

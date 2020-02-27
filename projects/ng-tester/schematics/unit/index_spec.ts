import * as path from 'path'

import { Tree } from '@angular-devkit/schematics'
import { SchematicTestRunner } from '@angular-devkit/schematics/testing'

describe('unit tests', () => {
  const collectionPath = path.join(__dirname, '../collection.json')
  let runner: SchematicTestRunner

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', collectionPath)
  })

  it(`doesn't generate spec file, given no "name" param`, done => {
    runner.runSchematicAsync('unit', {}, Tree.empty()).subscribe(tree => {
      expect(tree.files).toEqual([])
      done()
    })
  })

  it(`does generate spec file, given "name" param`, done => {
    runner.runSchematicAsync('unit', { name: 'test' }, Tree.empty()).subscribe(tree => {
      expect(tree.files).toEqual([])
      done()
    })
  })
})

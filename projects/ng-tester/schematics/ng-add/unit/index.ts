import { experimental, normalize, strings } from '@angular-devkit/core'
import {
  Rule,
  SchematicsException,
  Tree,
  apply,
  applyTemplates,
  chain,
  mergeWith,
  move,
  url,
} from '@angular-devkit/schematics'

import { Schema } from './schema'

export function unit(options: Schema): Rule {
  return (tree: Tree) => {
    const workspaceConfig = tree.read('/angular.json')
    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration')
    }
    const workspaceContent = workspaceConfig.toString()
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceContent)
    const projectName = options.project as string
    const project = workspace.projects[projectName]
    const projectType = project.projectType === 'application' ? 'app' : 'lib'
    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`
    }
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name,
      }),
      move(normalize(options.path as string)),
    ])
    return chain([mergeWith(templateSource)])
  }
}

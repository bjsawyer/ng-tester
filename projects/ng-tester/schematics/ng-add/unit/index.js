"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
function unitTest(options) {
    return (tree) => {
        const workspaceConfig = tree.read('/angular.json');
        if (!workspaceConfig) {
            throw new schematics_1.SchematicsException('Could not find Angular workspace configuration');
        }
        const workspaceContent = workspaceConfig.toString();
        const workspace = JSON.parse(workspaceContent);
        const projectName = options.project;
        const project = workspace.projects[projectName];
        const projectType = project.projectType === 'application' ? 'app' : 'lib';
        if (options.path === undefined) {
            options.path = `${project.sourceRoot}/${projectType}`;
        }
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.applyTemplates({
                classify: core_1.strings.classify,
                dasherize: core_1.strings.dasherize,
                name: options.name,
            }),
            schematics_1.move(core_1.normalize(options.path)),
        ]);
        return schematics_1.chain([schematics_1.mergeWith(templateSource)]);
    };
}
exports.unitTest = unitTest;
//# sourceMappingURL=index.js.map
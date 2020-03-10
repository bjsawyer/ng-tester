# ng-tester ![npm](https://img.shields.io/npm/v/ng-tester)

`ng-tester` is an Angular library designed to create structured, opionated spec files for components. It incorporates [angular-unit-test-helper](https://www.npmjs.com/package/angular-unit-test-helper) to assist with mocking and [ng-bullet](https://www.npmjs.com/package/ng-bullet) to optimize TestBed speed.

Each spec file is created with two subsections:

### "DOM Tests"

- Contains Angular TestBed
- Designed for tests that check state changes (i.e. `fixture.detectChanges()`) or require DOM access (i.e. testing UI elements)
- Runs slower than functional tests, but thanks to `ng-bullet`, the DOM only recompiles once per **component** (rather than the default TestBed behavior of once per **test**)

### "Functional Tests"

- Designed for functional logic testing
- Runs much faster than "DOM Tests", as DOM is not created for these tests
- Should contain majority of unit tests

## Usage

1. Run `npm install -D ng-tester`
2. Navigate to project/directory you'd like to generate spec file
3. Run `ng generate ng-tester:unit`

## Peer Dependencies

- @angular/common: ^9.0.2
- @angular/core: ^9.0.2
- angular-unit-test-helper: ^1.4.1
- ng-bullet: ^1.0.3
- tslib: ^1.10.0

## Testing Schematic Locally

1. Run `npm run build`
2. Run `npm link dist/ng-tester`
3. Navigate to project/directory you'd like to generate spec file
4. Run `ng generate ng-tester:unit`

# ng-tester [![npm version](https://badge.fury.io/js/ng-tester.svg)](https://badge.fury.io/js/ng-tester)

`ng-tester` is an Angular library designed to create structured, opionated spec files for components. It incorporates [angular-unit-test-helper](https://www.npmjs.com/package/angular-unit-test-helper) to assist with mocking.

Each spec file is created with two subsections:

### "DOM Tests"

- Contains Angular TestBed
- Designed for tests that check state changes (i.e. `fixture.detectChanges()`) or require DOM access (i.e. testing UI elements)
- Runs slower than functional tests (however [as of Angular v9](https://blog.angular.io/version-9-of-angular-now-available-project-ivy-has-arrived-23c97b63cfa3), components are no longer recompiled for each test, significantly improving test run speed from previous Angular versions)

### "Functional Tests"

- Designed for functional logic testing
- Runs faster than "DOM Tests", since the DOM is not created for these tests

## Usage

1. Run `npm install -D ng-tester`
1. Navigate to project/directory you'd like to generate spec file
1. Run `ng generate ng-tester:unit`

## Output

Below is the `test.component.spec.ts` file generated for the command `ng g ng-tester:unit --name=test`:

```ts
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import {
  addProperty,
  addPropertyAsBehaviorSubject,
  autoSpyObj,
  createComponentMock,
  getAllFunctions,
  getAllProperties,
  injectClass,
  injectSpy
} from 'angular-unit-test-helper'

import { TestComponent } from './test.component'

describe('TestComponent', () => {
  let component: TestComponent
  // Declare service mocks
  let fakeServiceSpy: jasmine.SpyObj<FakeService>

  beforeEach(() => {
    // Initialize mocked services from actual services
    fakeServiceSpy = autoSpyObj(FakeService)
  })

  describe('DOM Tests', () => {
    let fixture: ComponentFixture<TestComponent>

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [],
        providers: [
          // Inject mocked services into TestBed
          { provide: FakeService, useValue: fakeServiceSpy }
        ],
      }).compileComponents()
    }))

    beforeEach(() => {
      // Get injected dependencies from TestBed
      fakeServiceSpy = injectSpy(FakeService)

      fixture = TestBed.createComponent(TestComponent)
      component = fixture.componentInstance
    })

    it('should create', () => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
    })

    it('test goes here', () => {
      // arrange


      // act


      // assert

    })
  })

  describe('Functional Tests', () => {
    beforeEach(() => {
      // Create component instance with mocked services
      component = new TestComponent(fakeServiceSpy)
    })

    it('test goes here', () => {
      // arrange


      // act


      // assert

    })
  })
})
```

## Peer Dependencies

- @angular/common: >= 9.0.0
- @angular/core: >= 9.0.0
- angular-unit-test-helper: >= 9.3.0
- tslib: >= 1.10.0

## Testing Schematic Locally

1. In `ng-tester` directory, run `npm run package`
1. Navigate to project/directory you'd like to generate spec file
1. Install `.tgz` file created in step 1 as a devDependency (i.e. `npm i ../ng-tester/dist/ng-tester/ng-tester-9.0.0.tgz -D`)
1. Run `ng generate ng-tester:unit`

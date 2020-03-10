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

## Output

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  addProperty,
  addPropertyAsBehaviorSubject,
  autoSpyObj,
  createComponentMock,
  getAllFunctions,
  getAllProperties
} from 'angular-unit-test-helper'
import { configureTestSuite } from 'ng-bullet'

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

    configureTestSuite(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [],
        providers: [
          // Inject mocked services into TestBed
          { provide: FakeService, useFactory: () => fakeServiceSpy }
        ],
      })
    })

    beforeEach(() => {
      // Get injected services from TestBed
      fakeServiceSpy = TestBed.get(FakeService)

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
  }
})
```

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

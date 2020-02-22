import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'lib-ng-tester',
  template: `
    <p>
      ng-tester works!
    </p>
  `,
  styles: [],
})
export class NgTesterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

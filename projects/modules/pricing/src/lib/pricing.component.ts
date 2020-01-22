import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-pricing',
  template: `
    <p>
      pricing works!
      <router-outlet></router-outlet>
    </p>
  `,
  styles: []
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

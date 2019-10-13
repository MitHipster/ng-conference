import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="error-message">You've just been 404'd 😔</h1>
  `,
  styles: [
    `
      .error-message {
        margin-top: 150px;
        font-size: 48px;
        text-align: center;
      }
    `
  ]
})
export class PageNotFoundComponent {
  constructor() {}
}

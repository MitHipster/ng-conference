import { Directive, Input, OnInit, Inject, ElementRef } from '@angular/core';

import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  // Cannot use modal-trigger as a variable name. Must be aliased
  @Input('modal-trigger') modalId: string;

  constructor(@Inject(JQ_TOKEN) private $: any, private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.addEventListener('click', () => {
      // Passes an empty configuration object to the modal instance
      this.$(`#${this.modalId}`).modal({});
    });
  }
}

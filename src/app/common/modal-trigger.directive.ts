import { Directive, OnInit, Inject, ElementRef } from '@angular/core';

import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  constructor(@Inject(JQ_TOKEN) private $: any, private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.addEventListener('click', () => {
      // Passes an empty configuration object to the modal instance
      this.$('#simple-modal').modal({});
    });
  }
}

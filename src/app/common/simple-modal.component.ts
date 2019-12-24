import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{ elementId }}" class="modal fade" tabindex="-1" #modalContainer>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-body {
        min-height: 250px;
        max-height: 500px;
        overflow-y: scroll;
      }
    `
  ]
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnClick: string;
  @ViewChild('modalContainer') modalContainer: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngOnInit() {}

  closeModal() {
    if (this.closeOnClick === 'true') {
      this.$(this.modalContainer.nativeElement).modal('hide');
    }
  }
}

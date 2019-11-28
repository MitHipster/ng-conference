import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <div class="well pointable" (click)="toggleContent()">
      <h4 class="well-title">{{ title }}</h4>
      <ng-content *ngIf="visible"></ng-content>
    </div>
  `,
  styles: []
})
export class CollapsibleWellComponent implements OnInit {
  @Input() title: string;
  visible: boolean = true;
  constructor() {}

  ngOnInit() {}

  toggleContent(): void {
    this.visible = !this.visible;
  }
}

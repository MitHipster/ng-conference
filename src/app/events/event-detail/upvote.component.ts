import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="voting-widget-container" (click)="onClick()">
      <div class="voting-widget">
        <div class="voting-button">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse voting-count">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(value: boolean) {
    this.iconColor = value ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();

  iconColor: string;

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.vote.emit({});
  }
}

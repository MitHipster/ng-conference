import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="voting-widget-container" (click)="onClick()">
      <div class="voting-widget">
        <div class="voting-button">
          <i
            class="glyphicon"
            [ngClass]="{
              'glyphicon-heart': voted,
              'glyphicon-heart-empty': !voted
            }"
          ></i>
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
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.vote.emit({});
  }
}

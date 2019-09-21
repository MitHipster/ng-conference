import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    const isLateStart = this.event && this.event.time === '10:00 am';

    return { green: isEarlyStart, red: isLateStart, bold: isLateStart };
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IEvent } from '../shared/event.model';
import { EventService } from '../shared';

@Component({
  selector: 'event-create',
  templateUrl: './event-create.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        font-size: 12px;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::placeholder {
        color: #999;
      }
    `
  ]
})
export class EventCreateComponent implements OnInit {
  newEvent: IEvent;
  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {}

  saveEvent(formValues): void {
    let event: IEvent = {
      ...formValues,
      id: undefined,
      sessions: []
    };
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}

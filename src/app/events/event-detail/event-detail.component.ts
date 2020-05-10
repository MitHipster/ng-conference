import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/index';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  sortBy: string = 'name';
  filterByLevel: string = 'all';

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Plus sign before this.route casts value to a number
    this.route.data.forEach(data => {
      this.event = data['event'];
      // Reset add mode in case it's enabled during search
      this.addMode = false;
    });
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    // Derive new ID by getting current max ID and incrementing by one
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map(s => s.id)
    );

    session.id = nextId + 1;
    this.event.sessions.push(session);
    // Update event with latest session information
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }
}

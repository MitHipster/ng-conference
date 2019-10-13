import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Plus sign before this.route casts value to a number
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}

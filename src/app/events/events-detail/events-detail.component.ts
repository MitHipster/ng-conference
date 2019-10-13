import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss']
})
export class EventsDetailComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Plus sign before this.route casts value to a number
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}

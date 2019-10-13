import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss']
})
export class EventsDetailComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}

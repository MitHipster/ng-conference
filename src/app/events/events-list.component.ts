import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private toastrService: ToastrService, private route: ActivatedRoute) {}

  ngOnInit() {
    // No longer need as this functionality has been moved to a resolver
    // this.eventService.getEvents().subscribe(events => (this.events = events));

    // Events are now received as an object off the URL
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailCLick(eventName) {
    this.toastrService.success(eventName);
  }
}

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { EventService } from './shared/event.service';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve() {
    // In Angular, resolvers automatically subscribe to an observable
    return this.eventService.getEvents();
  }
}

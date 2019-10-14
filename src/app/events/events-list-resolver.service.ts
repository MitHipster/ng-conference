import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

import { EventService } from './shared/event.service';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve() {
    // By using pipe an Observable is returned instead of a subscription
    // and map acts as subscribe by getting the data
    return this.eventService.getEvents().pipe(map(events => events));
  }
}

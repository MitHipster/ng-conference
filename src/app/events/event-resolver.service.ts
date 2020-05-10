import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { EventService } from './shared/event.service';

@Injectable()
export class EventsResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // In Angular, resolvers automatically subscribe to an observable
    return this.eventService.getEvent(route.params['id']);
  }
}

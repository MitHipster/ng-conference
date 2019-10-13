import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorGuard implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Plus sign before route.params casts value to a number
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) this.router.navigate(['page-not-found']);

    return eventExists;
  }
}

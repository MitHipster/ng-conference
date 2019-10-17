import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {
  EventsListComponent,
  EventsListResolverService,
  EventThumbnailComponent,
  EventDetailComponent,
  EventRouteActivatorGuard,
  EventCreateComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent,
    PageNotFoundComponent
  ],
  providers: [
    // EventService is shorthand for { provide: EventService, useValue: EventService }
    EventService,
    ToastrService,
    EventRouteActivatorGuard,
    EventsListResolverService,
    // The first parameter passed into canDeactivateCreateEvent is the component itself
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event. Do you wish to continue?');
  }

  return true;
}

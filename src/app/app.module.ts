import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {
  EventsListComponent,
  EventsListResolverService,
  EventThumbnailComponent,
  EventDetailComponent,
  EventRouteActivatorGuard,
  EventCreateComponent,
  SessionCreateComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { AuthService } from './user/auth.service';

// Declares global toastr object
declare let toastr: Toastr;

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent,
    SessionCreateComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    PageNotFoundComponent,
    DurationPipe
  ],
  providers: [
    // EventService is shorthand for { provide: EventService, useValue: EventService }
    EventService,
    EventRouteActivatorGuard,
    EventsListResolverService,
    AuthService,
    // The first parameter passed into canDeactivateCreateEvent is the component itself
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    { provide: TOASTR_TOKEN, useValue: toastr }
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

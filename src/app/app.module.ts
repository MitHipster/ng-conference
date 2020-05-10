import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {
  EventsResolverService,
  EventsListComponent,
  EventsListResolverService,
  EventThumbnailComponent,
  EventDetailComponent,
  EventCreateComponent,
  SessionCreateComponent,
  SessionListComponent,
  UpvoteComponent,
  ValidateLocationDirective,
  VoterService,
  DurationPipe
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import {
  CollapsibleWellComponent,
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import { EventService } from './events/shared/event.service';
import { AuthService } from './user/auth.service';

// Declares global object
const toastr: Toastr = window['toastr'];
const jquery = window['$'];

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent,
    SessionCreateComponent,
    SessionListComponent,
    UpvoteComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    PageNotFoundComponent,
    ValidateLocationDirective,
    ModalTriggerDirective,
    DurationPipe
  ],
  providers: [
    // EventService is shorthand for { provide: EventService, useValue: EventService }
    EventService,
    EventsResolverService,
    EventsListResolverService,
    VoterService,
    AuthService,
    // The first parameter passed into canDeactivateCreateEvent is the component itself
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jquery }
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

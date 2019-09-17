import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent, NavBarComponent, EventsListComponent, EventThumbnailComponent],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

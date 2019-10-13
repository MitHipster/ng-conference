import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

import { EventRouteActivatorGuard } from './events/events-detail/event-route-activator.guard';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventsDetailComponent,
    EventCreateComponent,
    PageNotFoundComponent
  ],
  providers: [EventService, ToastrService, EventRouteActivatorGuard],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

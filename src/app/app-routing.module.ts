import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListComponent } from './events/events-list.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import { EventRouteActivatorGuard } from './events/events-detail/event-route-activator.guard';

const routes: Routes = [
  { path: 'events/new', component: EventCreateComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventsDetailComponent, canActivate: [EventRouteActivatorGuard] },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

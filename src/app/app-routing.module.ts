import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  EventsListComponent,
  EventsListResolverService,
  EventDetailComponent,
  EventRouteActivatorGuard,
  EventCreateComponent,
  SessionCreateComponent
} from './events/index';

import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'events/session/new', component: SessionCreateComponent },
  {
    path: 'events/new',
    component: EventCreateComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorGuard] },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService }
  },
  { path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule) },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

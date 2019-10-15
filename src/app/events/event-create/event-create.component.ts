import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'event-create',
  templateUrl: './event-create.component.html'
})
export class EventCreateComponent implements OnInit {
  isDirty: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(['/events']);
  }
}

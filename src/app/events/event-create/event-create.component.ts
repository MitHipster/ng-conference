import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(['/events']);
  }
}

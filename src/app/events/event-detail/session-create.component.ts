import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { ISession } from '../shared/event.model';

@Component({
  templateUrl: 'session-create.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        font-size: 12px;
        padding-left: 10px;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #e3c3c5;
      }
      .error ::placeholder {
        color: #999;
      }
    `
  ]
})
export class SessionCreateComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() {}

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues): void {
    let session: ISession = {
      ...formValues,
      duration: +formValues.duration,
      id: undefined,
      voters: []
    };

    console.log(session);
    this.newSessionForm.reset();
    this.duration.setValue('');
    this.level.setValue('');
  }
}

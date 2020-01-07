import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
  selector: 'textbox',
  template: `
      <div [formGroup]="form">
        <input *ngIf="!field.multiline"
        [attr.type]="field.type" class="form-control"
        [id]="field.name" [name]="field.name" [formControlName]="field.name">

        <p *ngIf="!isValid && (isDirty || isTouched)"
              class="alert alert-danger">
              {{field.label}} Required.
        </p>
      </div>
    `
})
export class TextBoxComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  get isTouched() { return this.form.controls[this.field.name].touched; }

  constructor() {

  }
}
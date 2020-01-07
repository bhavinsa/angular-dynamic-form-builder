import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'radio',
  template: `
      <div [formGroup]="form">
        <div class="form-check" *ngFor="let opt of field.options">
          <input class="form-check-input" type="radio" [value]="opt.key" [formControlName]="field.name">
          <label class="form-check-label">
            {{opt.label}}
          </label>
        </div>
        <p *ngIf="getRadio.errors?.required"
              class="alert alert-danger">
              {{field.label}} Required.
        </p>
      </div> `
})
export class RadioComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  get isTouched() { return this.form.controls[this.field.name].touched; }
  get getRadio() {
    return this.form.controls[this.field.name];
  }

}
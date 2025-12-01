import { Component, inject, input, model, output } from '@angular/core';
import { Question } from '../../../models/models';
import { FormFields } from '../../../Services/form-fields';

@Component({
  selector: 'app-base-fields',
  imports: [],
  template: ``,
  styleUrl: './base-fields.scss',
})
export class BaseFields {
fieldValue=model<any>();

 formFeildService=inject(FormFields);
  designMode=input<boolean>();
  question=input.required<Question>();
}

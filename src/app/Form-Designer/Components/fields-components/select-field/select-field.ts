import { Component, input } from '@angular/core';
import { Question } from '../../../models/models';

@Component({
  selector: 'app-select-field',
  imports: [],
  templateUrl: './select-field.html',
  styleUrl: './select-field.scss',
})
export class SelectField {
  question=input<Question>();

}

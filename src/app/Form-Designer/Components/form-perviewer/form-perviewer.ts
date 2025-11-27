import { Component, inject } from '@angular/core';
import { FormFields } from '../../Services/form-fields';
import { FormField } from '../form-field/form-field';

@Component({
  selector: 'app-form-perviewer',
  imports: [FormField],
  templateUrl: './form-perviewer.html',
  styleUrl: './form-perviewer.scss',
})
export class FormPerviewer {
  formFieldsService=inject(FormFields);

}

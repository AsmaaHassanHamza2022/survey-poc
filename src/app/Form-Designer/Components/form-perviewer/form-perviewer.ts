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
  answers: { [questionId: string]: any } = {};
  formFieldsService=inject(FormFields);

  ngOnInit() {
  for (const page of this.formFieldsService.pages) {
    for (const question of page.questions) {
      this.answers[question.id] = null;
    }
  }
}
}

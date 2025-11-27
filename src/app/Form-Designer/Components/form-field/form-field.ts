import { NgComponentOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { FieldsTypesDefinitions } from '../../Services/fields-types-definitions';
import { Question } from '../../models/models';

@Component({
  selector: 'app-form-field',
  imports: [NgComponentOutlet],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})
export class FormField {
isDesignMode=input<boolean>();
question=input.required<Question>();
fieldsTypesService=inject(FieldsTypesDefinitions);
questionType = computed(() => this.question().type);

componentRef = computed(() => {
  const type = this.questionType(); // <-- reactive
  const def = this.fieldsTypesService.getTypeComponent(type);
  return def?.component || null;
});

fieldLabel = computed(() => {
  const type = this.questionType(); 
  const def = this.fieldsTypesService.getTypeComponent(type);
  return def?.answerLabel || null;
});
}

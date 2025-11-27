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
question=input.required<Question>();
fieldsTypesService=inject(FieldsTypesDefinitions);
componentRef=computed(()=>{
  const componentDef=this.fieldsTypesService.getTypeComponent(this.question().type);
  return componentDef?.component ||null;
})


}

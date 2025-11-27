import { NgComponentOutlet, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldsTypesDefinitions } from '../../Services/fields-types-definitions';
import { FormFields } from '../../Services/form-fields';
import { FormField } from '../form-field/form-field';

@Component({
  selector: 'app-form-designer',
  imports: [NgComponentOutlet,NgIf,FormsModule,FormField],
  templateUrl: './form-designer.html',
  styleUrl: './form-designer.scss',
})
export class FormDesigner {
    fieldsTypesService=inject(FieldsTypesDefinitions);
  formFieldsService=inject(FormFields);

}

import { Component, inject, signal } from '@angular/core';
import { FieldsTypesDefinitions } from '../../Services/fields-types-definitions';
import { NgClass, NgComponentOutlet, NgIf } from '@angular/common';
import { FormFields } from '../../Services/form-fields';
import { FormsModule } from '@angular/forms';
import { FormDesigner } from '../form-designer/form-designer';
import { FormPerviewer } from '../form-perviewer/form-perviewer';

@Component({
  selector: 'app-form-canvas',
  imports: [FormDesigner,FormPerviewer,NgClass],
  templateUrl: './form-canvas.html',
  styleUrl: './form-canvas.scss',
})
export class FormCanvas {
  currentView = signal<'designMode' | 'perviewMode'>('designMode');
  fieldsTypesService=inject(FieldsTypesDefinitions);
  formFieldsService=inject(FormFields);

constructor(){
}

toggleTo(view: 'designMode' | 'perviewMode') {
    this.currentView.set(view);
  }

  get IsDesignMode() {
    return this.currentView() === 'designMode';
  }
}

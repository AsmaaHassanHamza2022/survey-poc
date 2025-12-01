import { Component, inject, signal } from '@angular/core';
import { FieldsTypesDefinitions } from '../../Services/fields-types-definitions';
import { JsonPipe, NgClass, NgComponentOutlet, NgIf } from '@angular/common';
import { FormFields } from '../../Services/form-fields';
import { FormsModule } from '@angular/forms';
import { FormDesigner } from '../form-designer/form-designer';
import { FormPerviewer } from '../form-perviewer/form-perviewer';
import { FormRenderer } from '../form-renderer/form-renderer';

@Component({
  selector: 'app-form-canvas',
  imports: [FormDesigner,FormPerviewer,NgClass,JsonPipe,FormRenderer],
  templateUrl: './form-canvas.html',
  styleUrl: './form-canvas.scss',
})
export class FormCanvas {
  currentView = signal<'designMode' | 'perviewMode' |'JsonView'>('designMode');
  fieldsTypesService=inject(FieldsTypesDefinitions);
  formFieldsService=inject(FormFields);

constructor(){
}

toggleTo(view: 'designMode' | 'perviewMode' |'JsonView') {
    this.currentView.set(view);
  }

  get IsDesignMode() {
    return this.currentView() === 'designMode';
  }
  get IsPreviewMode() {
    return this.currentView() === 'perviewMode';
  }
  get IsJsonMode() {
    return this.currentView() === 'JsonView';
  }
}

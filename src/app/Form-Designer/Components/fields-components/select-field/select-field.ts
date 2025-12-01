import { Component, computed, inject, input } from '@angular/core';
import { Question } from '../../../models/models';
import { FormFields } from '../../../Services/form-fields';
import { FormsModule } from '@angular/forms';
import { BaseFields } from '../base-fields/base-fields';

@Component({
  selector: 'app-select-field',
  imports: [FormsModule],
  templateUrl: './select-field.html',
  styleUrl: './select-field.scss',
})
export class SelectField extends BaseFields {
  currentQestionId=computed(()=> this.question().id);

  currentQuestionPageId=computed(()=> {
    return this.formFeildService.getQuestionPage(this.currentQestionId()).id;
  });

  updateOption(option:any, event:any){
    option.value=event;
    option.label=event;
    // option.label=option.value = newValue3
    // ;
  }
}

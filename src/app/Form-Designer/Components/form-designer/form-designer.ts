import { JsonPipe, NgComponentOutlet, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldsTypesDefinitions } from '../../Services/fields-types-definitions';
import { FormFields } from '../../Services/form-fields';
import { FormField } from '../form-field/form-field';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { OptionItem, Page, Question } from '../../models/models';

@Component({
  selector: 'app-form-designer',
  imports: [NgComponentOutlet,NgIf,FormsModule,FormField,JsonPipe,CdkDrag,CdkDropList],
  templateUrl: './form-designer.html',
  styleUrl: './form-designer.scss',
})
export class FormDesigner {
    fieldsTypesService=inject(FieldsTypesDefinitions);
    formFieldsService=inject(FormFields);
    relatedOptions: OptionItem[] = [];
     // handle drop; event.previousContainer === event.container => reorder within same list
  onQuestionDrop(event: CdkDragDrop<Question[]>, page: Page) {
    if (!event || !page) return;

    if (event.previousContainer === event.container) {
      // reorder inside same page
      moveItemInArray(page.questions, event.previousIndex, event.currentIndex);
    } else {
      // moved between pages (if you allow cross-page drop)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    // persist reorder if your service supports it. call save or update method:
    if (this.formFieldsService?.save) {
      this.formFieldsService.save();
    } else if (this.formFieldsService?.updatePageQuestions) {
      this.formFieldsService.updatePageQuestions(page.id, page.questions);
    }
  }

  changeRelatedQuestion(question:Question){
    question.showIf.value = '';
    this.relatedOptions=this.formFieldsService
                                .getQuestionOptions(question.showIf.questionId)

  }
  toggleCollapse(pageId:string,questionId:string){
    this.formFieldsService.ToggleCollapsedQuestion(pageId,questionId);
  }
}

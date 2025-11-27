import { Injectable } from '@angular/core';
import { Page } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class FormFields {
  pages: Page[] = [];

  addNewPage() {
    const pageNumber= this.pages.length+1;
    this.pages.push({ id:crypto.randomUUID().toString(), title: `Page ${pageNumber}`, questions: [] });
  }

  deletePage(pageId: string) {
    this.pages = this.pages.filter((p) => p.id !== pageId);
  }

  addQuestionToPage(pageId: string,questionType='shortText') {
    const page = this.pages.find((p) => p.id === pageId); 
    if(!page){
      return;
    }
    if (page) {
      page.questions.push({
        id:  crypto.randomUUID().toString(),
        type: questionType,
        questionText: '',
        descriptionText: '',
        isRequired: false,
      });
    }
  }

  changeQuestionType(pageId: string, questionId: string, newType: string) {
    const page = this.pages.find((p) => p.id === pageId); 
    if (page) {
      const question = page.questions.find((q) => q.id === questionId);
      if (question) {
        question.type = newType;
      } 
    }
  }
  

  deleteQuestionFromPage(pageId: string, questionId: string) {
    const page = this.pages.find((p) => p.id === pageId);
    if (page) {
      page.questions = page.questions.filter((q) => q.id !== questionId);
    } 
  }

  save() {
    console.log("Form Structure:",JSON.stringify(this.pages,null,2));
  }

  
}

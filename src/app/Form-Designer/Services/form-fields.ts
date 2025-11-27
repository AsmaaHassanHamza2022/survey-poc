import { Injectable } from '@angular/core';
import { Page, Question } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class FormFields {
  pages: Page[] = [];

  addNewPage() {
    const pageNumber = this.pages.length + 1;
    this.pages.push({
      id: crypto.randomUUID().toString(),
      title: `Page ${pageNumber}`,
      questions: [],
    });
  }

  deletePage(pageId: string) {
    const page = this.pages.find((p) => p.id === pageId);
    if (!page) {
      return;
    }
    this.pages = this.pages.filter((p) => p.id !== pageId);
  }

  addQuestionToPage(pageId: string, questionType = 'shortText') {
    const page = this.pages.find((p) => p.id === pageId);
    if (!page) {
      return;
    }
    if (page) {
      page.questions.push({
        id: crypto.randomUUID().toString(),
        type: questionType,
        questionText: '',
        descriptionText: '',
        isRequired: false,
      });
    }
  }
  duplicateQuestion(pageId: string, question: Question) {
    const page = this.pages.find((p) => p.id === pageId);
    if (page) {
      if (question) {
        const duplicatedQuestion = {
          ...question,
          id: crypto.randomUUID().toString(),
        };
        page.questions.push(duplicatedQuestion);
      }
    }
  }

  changeQuestionType(pageId: string, questionId: string, newType: string) {
    const page = this.pages.find((p) => p.id === pageId);
    if (page) {
      const question = page.questions.find((q) => q.id === questionId);
      if (question) {
        page.questions = page.questions.map((q) =>
          q.id === questionId ? { ...q, type: newType } : q
        );
      }
      this.pages = [...this.pages]; // to trigger change detection
    }
  }

  deleteQuestionFromPage(pageId: string, questionId: string) {
    const page = this.pages.find((p) => p.id === pageId);
    if (page) {
      page.questions = page.questions.filter((q) => q.id !== questionId);
    }
  }

  addQuestionsOption(pageId: string, questionId: string, option: string) {
    const page = this.pages.find((p) => p.id === pageId);
    if (page) {
      const question = page.questions.find((q) => q.id === questionId);
      if (question) {
        question.options?.push(option);
      }
    }
  }
  deleteOptionFromQuestion(
    pageId: string,
    questionId: string,
    optionIndex: number
  ) {
    const page = this.pages.find((p) => p.id === pageId);
    if (page) {
      const question = page.questions.find((q) => q.id === questionId);
      if (question && question?.options?.length) {
        question.options.splice(optionIndex, 1);
      }
    }
  }

  save() {
    console.log('Form Structure:', JSON.stringify(this.pages, null, 2));
  }
}

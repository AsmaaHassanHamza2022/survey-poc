import { Injectable } from '@angular/core';
import { Page, Question } from '../models/models';
import { QuestionTypes } from '../utils/helpers/enums';

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
      page.questions = [
        ...page.questions,
        {
          id: crypto.randomUUID().toString(),
          type: questionType,
          questionText: 'Add Your Question Text Here',
          descriptionText: '',
          isRequired: false,
          options: [],
          showIf: {
            questionId: '',
            value: '',
          },
          // options: questionType === QuestionTypes.OneSelect ? [
          //   `Option 1`,
          //   'None',
          //   'Other'
          // ] :[],
        },
      ];
      this.pages = [...this.pages]; // to trigger change detection
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
          q.id === questionId
            ? {
                ...q,
                type: newType,
                options:
                  newType === QuestionTypes.OneSelect
                    ? [
                        {
                          label: 'Option',
                          value: 'Option',
                          canDelete: false,
                        },
                        // {label:'None' ,canDelete:false},
                        // {label:'Other' ,canDelete:false},
                      ]
                    : [],
              }
            : q
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
        question.options = [
          ...(question.options || []),
          {
            label: option,
            value: option,
            canDelete: true,
          },
        ];
        this.pages = [...this.pages]; // to trigger change detection
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

  updatePageQuestions(pageId: string, questions: Question[]) {
    let page = this.pages.find((p) => p.id === pageId);
    if (page) {
      page = {
        ...page,
        questions: [...questions],
      };
    }
  }

  getQuestionPage(questionId: string): Page {
    for (const page of this.pages) {
      if (page.questions.some((q) => q.id === questionId)) {
        return page;
      }
    }
    return {} as Page;
  }

  shouldShowQuestion2(question: Question): boolean {
    // No condition → always show
    if (!question.showIf) return true;

    const page = this.getQuestionPage(question.showIf.questionId);
    if (!page) return true;

    const controller = page.questions?.find(
      (q) => q.id === question.showIf!.questionId
    );
    if (!controller) return true;

    return controller.selectedOption === question.showIf!.value;
  }
  shouldShowQuestion(question: Question, answers=null): boolean {
    if (!question.showIf) return true;

    const controller = this.findQuestionById(question.showIf.questionId);
    if (!controller) return true;

    if(answers){
      const controllerAnswer = answers[controller.id];
      return controllerAnswer === question.showIf.value;
    }
     return true;
  }

  findQuestionById(id: string): Question | null {
    for (const page of this.pages) {
      for (const q of page.questions) {
        if (q.id === id) return q;
      }
    }
    return null;
  }
  getAllQuestionsExcept(excludedId: string): Question[] {
    if (!excludedId) return this.pages.flatMap((p) => p.questions);

    return this.pages
      .flatMap((p) => p.questions)
      .filter((q) => q.id !== excludedId);
  }

  getQuestionOptions(questionId: string) {
    if (!questionId) return [];
    const q = this.pages
      .flatMap((p) => p.questions)
      .find((q) => q.id === questionId);
    return q?.options || [];
  }

   ToggleCollapsedQuestion(pageId: string, questionsId:string) {
    let page = this.pages.find((p) => p.id === pageId);
    if (page) {
      const question=page.questions.find((q)=>q.id === questionsId);
      if(question){
        question.isCollapsed= !question.isCollapsed ;
      }
    //   page = {
    //     ...page,
    //     questions: [
    //       ...page.questions
    //     ],
    //   };
    }
  }
  save() {
    console.log('Form Structure:', JSON.stringify(this.pages, null, 2));
  }
}

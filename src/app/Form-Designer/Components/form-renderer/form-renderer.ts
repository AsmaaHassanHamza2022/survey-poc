import { Component, inject, input, signal } from '@angular/core';
import { FormFields } from '../../Services/form-fields';
import { Page, Question } from '../../models/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-renderer',
  imports: [CommonModule,FormsModule],
  templateUrl: './form-renderer.html',
  styleUrl: './form-renderer.scss',
})
export class FormRenderer {
formData=signal<Page[]>([]);
formfieldsService=inject(FormFields);

  // Central state to store user answers keyed by question ID
  // e.g., { "c88a3e76-caa7-4659-9e40-33c1b4523db9": "1" }
  userAnswers: { [key: string]: any } = {};

  ngOnInit() {
    this.formData.set(this.formfieldsService.pages);
   
    this.initializeAnswers();
  }

  // Set up initial empty answers for every question
  initializeAnswers(): void {
    this.formData().forEach(page => {
      page.questions.forEach(q => {
        // Initialize answer to an empty string, or null, based on type
        this.userAnswers[q.id] = '';
      });
    });
  }
  
  // Method to check if a question should be displayed
  isQuestionVisible(question: Question): boolean {
    const showIf = question.showIf;
    
    // 1. Always show if there is no showIf condition
    if (!showIf || !showIf.questionId) {
      return true;
    }
    
    // 2. Check the condition against the current state
    const requiredId = showIf.questionId;
    const requiredValue = showIf.value;
    const actualValue = this.userAnswers[requiredId];
    
    // Check if the dependent question's answer matches the required value
    return actualValue === requiredValue;
  }
  
  // This method runs whenever a user changes an input
  onAnswerChange(questionId: string, value: any): void {
    this.userAnswers[questionId] = value;
    // NOTE: In a more complex app, you might want to call 
    // a function here to reset answers for hidden questions.
    console.log('Current Answers:', this.userAnswers);
  }

  // Placeholder for form submission logic
  submitForm(): void {
    console.log('Form Submitted!', this.userAnswers);
    // You would typically send this data to a backend service here.
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyModule } from 'survey-angular-ui';
import { Model } from 'survey-core';
import { SurveyCreatorComponent } from './creator/creator/creator';
import { FormCanvas } from './Form-Designer/Components/form-canvas/form-canvas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SurveyModule,CommonModule,SurveyCreatorComponent,FormCanvas],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'survey-poc';
  surveyModel!: Model;
  ngOnInit() {
    const survey = new Model({
      elements: [
        {
          name: 'FirstName',
          title: 'Enter your first name:',
          type: 'text',

        },
        {
          name: 'LastName',
          title: 'Enter your last name:',
          type: 'text',
        },
      ],
    });
    survey.onComplete.add(()=>{
      console.log("Form Completed!!!")

    })
    this.surveyModel = survey;

  }
}

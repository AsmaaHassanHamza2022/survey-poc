import { Component, OnInit } from "@angular/core";
import { SurveyCreatorModule } from "survey-creator-angular";
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true
};

@Component({
  selector: 'survey-creator-component',
  templateUrl: './creator.html',
  styleUrls: ['./creator.scss'],
  imports:[SurveyCreatorModule]
})
export class SurveyCreatorComponent implements OnInit {
  surveyCreatorModel!: SurveyCreatorModel;
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
    this.surveyCreatorModel = creator;
  }
}

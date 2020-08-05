import { Component, Input, OnInit } from "@angular/core";
import { SurveyField } from 'src/suvery/model/suvery.model';

@Component({
  selector: "suvery-fields",
  templateUrl: "./suvery-fields.component.html",
})
export class SuveryFieldsComponent{
  @Input() surveyFields: SurveyField[];
  selectedFieldDropDown: SurveyField = null;


}

import { SurveyField, SurveyContent } from "src/suvery/model/suvery.model";
import { Component } from "@angular/core";
import { SuveryService } from "./suvery.service";
import { Observable } from "rxjs";

@Component({
  selector: "suvery",
  templateUrl: "./suvery.component.html",
  styleUrls: ["./suvery.style.scss"]
})
export class SuveryComponent {
  suveryContent$: Observable<SurveyContent>;
  index: number = 1;
  progres: number = 0;
  suveryCategoriesCount: number = 0;
  suveryHidden: boolean = true;

  openSuvery($event){
    console.log("executed");
    this.suveryHidden = false;
  }


  increment() {
    this.index++;
    this.scrollToTop();
    this.calculateProgress();
  }

  submit() {
    alert("Form has been submitted!");
  }

  decrement() {
    this.index--;
    this.scrollToTop();
    this.calculateProgress();
  }

  calculateProgress() {
    this.progres = (this.index / this.suveryCategoriesCount) * 100.0;
  }

  constructor(private suveryService: SuveryService) {
    this.suveryContent$ = this.suveryService.getSurveyContent();
    this.suveryContent$.toPromise().then((suveryContent) => {
      this.countCategories(suveryContent.surveyFields);
      this.calculateProgress();
    });
  }

  countCategories(suveryFields: SurveyField[]) {
    suveryFields.forEach((suveryField) => {
      if (suveryField.fieldKind == "Category") this.suveryCategoriesCount++;
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SuveryResponse, SurveyContent } from "../../model/suvery.model";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { tap } from "rxjs/internal/operators/tap";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class SuveryService {
  constructor(private http: HttpClient) {}

  getSurveyContent(): Observable<SurveyContent> {
    return this.http
      .get<SuveryResponse>("https://nf-api.imperea.ba/api/v1/survey")
      .pipe(
        switchMap(async (response) => response.payload.surveyContent[0]),
        tap((response) => console.log(response))
      );
  }
}

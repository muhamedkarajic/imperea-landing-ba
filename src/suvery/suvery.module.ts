import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SuveryComponent } from './components/suvery/suvery.component';
import { SuveryFieldsComponent } from './components/suvery-fields/suvery-fields.component';

@NgModule({
  declarations: [
    SuveryComponent,
    SuveryFieldsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [SuveryComponent,LandingPageComponent]
})
export class SuveryModule { }

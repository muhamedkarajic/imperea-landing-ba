import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "landing-page",
  templateUrl: "./landing-page.component.html",
})
export class LandingPageComponent {
  hideMenu:boolean= true;
  @Output() suvery: EventEmitter<any> = new EventEmitter();

  surveyActivate()
  {
    console.log("I'll try to emit.");
    this.suvery.emit(null);
  }
  toggleMenu()
  {
    this.hideMenu = !this.hideMenu;
  }
}

import {Component} from "angular2/core";
import {CD} from "./cd.model";
import {CDDisplay} from "./cd-display.component";
import {GenrePipe} from './genre.pipe'
import { CDListComponent} from './cd-list-display.component';

@Component({
  selector: "my-app",
  inputs:['cds'],
  directives:[CDDisplay, CDListComponent],
  template: `
  <h1>BUY MUSIC</h1>
  <cd-list-display [cdList]="cds">
  </cd-list-display>
  `


})

export class AppComponent{
  public cds: CD[];
  constructor(){
    this.cds = [
      new CD("Run The Jewels", "RTJ2", "Hip-Hop", 10),
      new CD("Radiohead", "A Moon Shaped Pool", "Rock", 10),
      new CD("Nothing", "Tired of Tomorrow", "Shoegaze", 10),
      new CD("Big Grams", "Big Grams", "Hip-Hop", 10),
      new CD("Run The Jewels", "RTJ", "Hip-Hop", 10)
    ];
  }
}

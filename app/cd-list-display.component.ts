import {Component} from "angular2/core";
import {CD} from "./cd.model";
import {CDDisplay} from "./cd-display.component";
import {GenrePipe} from './genre.pipe'

@Component ({
  selector: 'cd-list-display',
  inputs: ["cdList"],
  directives: [CDDisplay],
  pipes: [GenrePipe],
  template: `
  <select (change)='onChange($event.target.value)' class ='filter'>
  <option value= 'all' selected>All</option>
  <option value="Hip-Hop">Hip-Hop</option>
  <option value="Rock">Rock</option>
  <option value="Shoegaze">Shoegaze</option>
  </select>
    <cd-display *ngFor="#currentCd of cdList | genrePipe:filterGenre  "
    [cd]="currentCd"></cd-display>
  `
})

export class CDListComponent{
    public filterGenre: string = 'all';
  onChange(filterGenre){
    this.filterGenre = filterGenre;
  }

}

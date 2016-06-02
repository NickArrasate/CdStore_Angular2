import {Component} from "angular2/core";
import {CD} from "./cd.model";
import {CDDisplay} from "./cd-display.component";
import {GenrePipe} from './genre.pipe';
import {ArtistPipe} from './artist.pipe';
import {BoughtCDComponent} from './bought-cd.component';

@Component ({
  selector: 'cd-list-display',
  inputs: ["cdList"],
  directives: [CDDisplay, BoughtCDComponent],
  pipes: [GenrePipe, ArtistPipe],
  template: `
    <select (change)='onChange($event.target.value)' class ='filter'>
      <option value= 'all' selected>All</option>
      <option value="Hip-Hop">Hip-Hop</option>
      <option value="Rock">Rock</option>
      <option value="Shoegaze">Shoegaze</option>
    </select>
    <select (change)='onArtistChange($event.target.value)' class ='filter'>
      <option value= 'all' selected>All</option>
      <option value="Radiohead">Radiohead</option>
      <option value="Run The Jewels">Run The Jewels</option>
      <option value="Nothing">Nothing</option>
      <option value="Big Grams">Big Grams</option>
    </select>
    <cd-display *ngFor="#currentCd of cdList | genrePipe:filterGenre | artistPipe:filterArtist"
    [cd]="currentCd" (addToCart)='cdWasSelected($event)'></cd-display>
    <bought-display *ngFor="#currentBoughtCD of boughtCDs" [boughtCD]='currentBoughtCD'></bought-display>
    <h3>Total Price: {{totalPrice}} moneys</h3>
  `
})

export class CDListComponent{
    public filterArtist: string = 'all';
    public filterGenre: string = 'all';
    public totalPrice: number = 0;
    public boughtCDs = [];
  onChange(filterGenre){
    this.filterGenre = filterGenre;
  }
  onArtistChange(filterArtist){
    this.filterArtist = filterArtist;
  }
  cdWasSelected(selectedCD: CD): void {
    this.totalPrice += selectedCD.price;
    this.boughtCDs.push(selectedCD);
  }
}

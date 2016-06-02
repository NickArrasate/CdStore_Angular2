import {Component} from "angular2/core";
import {CD} from "./cd.model";

@Component ({
  selector: 'bought-display',
  inputs:['boughtCD'],
  template: `
    <p *ngIf="boughtCD">{{boughtCD.artist}} - {{boughtCD.album}} - {{boughtCD.price}}</p>
  `
})

export class BoughtCDComponent {
  public boughtCD: CD;


}

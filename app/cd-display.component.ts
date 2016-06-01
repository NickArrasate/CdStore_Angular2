import {Component} from "angular2/core";
import {CD} from "./cd.model";

@Component({
  selector: 'cd-display',
  inputs:['cd'],
  template: `
    <div class="row">
      <h4 class="col-sm-2">{{cd.artist}}</h4>
      <h4 class="col-sm-2">{{cd.album}}</h4>
      <h4 class="col-sm-2">{{cd.genre}}</h4>
      <h4 class="col-sm-2">{{cd.price}}.00</h4>
    </div>
  `
})

export class CDDisplay{
  public cd: CD;
}

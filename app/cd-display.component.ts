import {Component, EventEmitter} from "angular2/core";
import {CD} from "./cd.model";

@Component({
  selector: 'cd-display',
  inputs:['cd'],
  outputs: ['addToCart'],
  template: `
    <div class="row">
      <h4 class="col-sm-2">{{cd.artist}}</h4>
      <h4 class="col-sm-2">{{cd.album}}</h4>
      <h4 class="col-sm-2">{{cd.genre}}</h4>
      <h4 class="col-sm-2">{{cd.price}}.00</h4>
      <button (click)='cartClicked(cd)' class='col-sm-1'>Add to Cart</button>
    </div>
  `
})

export class CDDisplay{
  public cd: CD;
  public addToCart: EventEmitter<CD>;
  constructor(){
    this.addToCart = new EventEmitter();
  }
  cartClicked(clickedCD: CD): void {
    this.addToCart.emit(clickedCD);
  }
}

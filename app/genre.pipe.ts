import {Pipe, PipeTransform} from 'angular2/core';
import {CD} from './cd.model';

@Pipe({
  name: 'genrePipe',
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform(input: CD[], args){
    var desiredGenre = args[0];
    if(desiredGenre === 'Hip-Hop'){
      return input.filter((cd)=>{
        return cd.genre === 'Hip-Hop';
      });
    } else if (desiredGenre === 'Rock'){
      return input.filter((cd)=>{
        return cd.genre === 'Rock';
      });
    } else if (desiredGenre === 'Shoegaze'){
    return input.filter((cd)=>{
      return cd.genre === 'Shoegaze';
      });
    } else {
      return input;
    };
  }
}

import {Pipe, PipeTransform} from 'angular2/core';
import {CD} from './cd.model';

@Pipe ({
  name: 'artistPipe',
  pure: false,
})

export class ArtistPipe implements PipeTransform {
  transform(input: CD[], args){
    var desiredArtist = args[0];
    if(desiredArtist === 'Big Grams'){
      return input.filter((cd)=>{
        return cd.artist === 'Big Grams';
      });
    } else if(desiredArtist === 'Radiohead'){
      return input.filter((cd)=>{
        return cd.artist === 'Radiohead';
      });
    } else if(desiredArtist === 'Run The Jewels'){
      return input.filter((cd)=>{
        return cd.artist === 'Run The Jewels';
      });
    } else if(desiredArtist === 'Nothing'){
      return input.filter((cd)=>{
        return cd.artist === 'Nothing';
      });
    } else {
      return input;
    };
  }
}    

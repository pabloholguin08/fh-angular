import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

 //singleton se va a usar el valor en toda la app
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name:'Krilin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  }];

  addCharacter(character: Character):void{
    //.unshift (al inicio)
    const newCharacter:Character = {id:uuid(), ...character}
    this.characters.push(character);
  }

  // onDeleteCharacter(index: number){
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter( character => character.id !== id);
  }

}

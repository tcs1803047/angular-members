import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Member01', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},
      { id: 2, name: 'Member02', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},
      { id: 3, name: 'Member03', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},
      { id: 4, name: 'Member04', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},
      { id: 5, name: 'Member05', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},
      { id: 6, name: 'Member06', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},
      { id: 7, name: 'Member07', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},
      { id: 8, name: 'Member08', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},
      { id: 9, name: 'Member09', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},
      { id: 10, name: 'Member10', mail: 'abc@abc.com', password: '********', petname: 'petname', pettype:'Type A', petbirthday:'2020-01-01'},                        
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
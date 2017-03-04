import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  moduleId:'module.id',
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService:HeroService,private router:Router){

  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void { 
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes=>this.heroes=heroes);
  }

  gotoDetail(){
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

}






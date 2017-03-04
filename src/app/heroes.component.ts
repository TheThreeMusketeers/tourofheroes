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
  errorMessage:string;

  constructor(private heroService:HeroService,private router:Router){

  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void { 
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
            .subscribe(
            value => this.heroes = value,
            error => this.errorMessage = <any>error);
    console.log("Herolar",this.heroes);
  }

  add(name:string){
    name=name.trim();
    if(!name) {return;}
    this.heroService.create(name)
    .then(hero=>{
      this.heroes.push(hero);
      console.log("Bu da yeni kaydedilen Hero:",JSON.stringify(hero));
      //this.selectedHero=null;
    });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  gotoDetail(){
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

}






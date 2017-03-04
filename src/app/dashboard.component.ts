import { Component,OnInit } from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    moduleId: module.id,
    selector:'my-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
    heroes:Hero[]=[];
    errorMessage:String;

    constructor (private heroService:HeroService){

    }

    ngOnInit(){
        this.heroService.getHeroes()
            .subscribe(
            value => this.heroes = value,
            error => this.errorMessage = <any>error);
        console.log(this.errorMessage);
    }
}
import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Location} from '@angular/common';

@Component({
    moduleId:module.id,
    selector:'hero-form',
    templateUrl:'./hero-form.component.html'
})

export class HeroFormComponent{
    constructor(
        private heroService:HeroService,
         private location:Location
    ){}
    powers = ['Really Smart','Super Flexible','Super Hot','Wheater Cnahger'];

    model = new Hero(1,'Dr.IQ',this.powers[0],'chuck Overstreet');

    submitted=false;

    newHero() {
    this.model = new Hero(2, '', '');
    }

    onSubmit(){
        this.save();
        this.submitted=true;
    }

    save(): void {
        this.heroService.update(this.model);
    }

    goBack(){
        this.location.back();
    }

    get diagnostic(){return JSON.stringify(this.model);}
}
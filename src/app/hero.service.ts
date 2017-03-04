import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()

export class HeroService{
    private WEB_API_BASE_URL="http://localhost:64822/";
    private heroesUrl=this.WEB_API_BASE_URL+'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http){}


    getHeroes() {
        return this.http.get(this.heroesUrl)
            .map(res => <Hero[]>res.json())
            .catch(this.handleError);
    }

 /*
    getHeroes(): Observable<{}> {
        return this.http.get(this.heroesUrl)
            .map((response: Response) => <any[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

   
    getHeroes(): Promise<Hero[]>{
        console.log("Hero listesi çekiliyor",this.heroesUrl);
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response=>response.json().data as Hero[])
                .catch(this.handleError);
    }
    */

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any>{
        console.error('An error occured',error);//do not use in production
        return Promise.reject(error.message||error);
    }

}
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';


import { Hero } from './hero';

@Injectable()

export class HeroService{
    private WEB_API_BASE_URL="http://localhost:64822/";
    private heroesUrl=this.WEB_API_BASE_URL+'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http){
        
    }


    getHeroes() {
        return this.http.get(this.heroesUrl)
            .map(res => <Hero[]>res.json())
            .catch(this.handleError);
    }

   getHero(id:number){
       return this.http.get(this.heroesUrl+"/"+id)
        .map(res=><Hero>res.json())
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

    create(hero:Hero):Promise<Hero>{
        return this.http
            .post(this.heroesUrl,JSON.stringify(hero),{headers:this.headers})
            .toPromise()
            .then(res=><Hero>res.json())
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any>{
        console.error('An error occured',error);//do not use in production
        return Promise.reject(error.message||error);
    }

}
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Hero} from './hero';

@Injectable()

export class HeroSearchService{

    private WEB_API_BASE_URL="http://localhost:64822/";

    constructor(private http:Http){}

    search(term:string):Observable<Hero[]>{
        return this.http
        .get(this.WEB_API_BASE_URL+`api/heroes/?name=${term}`)
        .map(res => <Hero[]>res.json());
    }
}
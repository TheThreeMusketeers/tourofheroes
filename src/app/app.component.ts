import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
    selector:'app-root',
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
     
     constructor(private translate:TranslateService){
         translate.addLangs(["tr","en"]);
         translate.setDefaultLang("en");

         //let browserLang=translate.getBrowserLang();
         //translate.use(browserLang.match(/tr|en/)?browserLang:"tr");

     }

     changeLanguage(lang:string){
         console.log(lang);
         this.translate.use(lang);
     }
}
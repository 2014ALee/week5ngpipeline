import { Component } from "@angular/core";

@Component({
    selector: 'app-clicker',
    templateUrl:'./clicker.component.html'
})
export class Clicker{
    clicks = 0;
    increment(amount:number){
        this.clicks += amount;
    }
}
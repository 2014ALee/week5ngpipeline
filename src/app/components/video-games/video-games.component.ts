import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'video-games';
    templ
})
export class VideoGamesComponent implements OnInit{
    games: VideoGame[];

    ngOnInit(){
        this.videGameService.games$.subscribe(succ =>{
            this.games = succ;
        },
    err =>{

    }
    );
    }
}
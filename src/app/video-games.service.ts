import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {

  games = VideoGame[];
  private gameStream = new BehaviorSubject<VideoGame[]>([]);
  games$ = this.gameStream.asObservable();

  constructor() {
    setTimeout(()=>{
      this.gameStream.next([
        {title: 'Fortnite',
        description: 'build things and shoot children'}
      ])
    })
   }
}

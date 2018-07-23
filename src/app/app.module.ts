import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.components';
import { SecondComponent } from './components/second/second.components';
import { Clicker } from './components/clicker/clicker.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { LikeButton } from './components/like-button/likeButton';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    Clicker,
    LikeButton,
    NavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

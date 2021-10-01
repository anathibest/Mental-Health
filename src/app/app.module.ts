
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TopicsComponent } from './topics/topics.component';
import { SexualAbuseComponent } from './sexual-abuse/sexual-abuse.component';
import { QuizzComponent } from './quizz/quizz.component';
import { FinalQuizComponent } from './final-quiz/final-quiz.component';
import { AnnonymousSignUpComponent } from './annonymous-sign-up/annonymous-sign-up.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { NeedHelpComponent } from './need-help/need-help.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    TopicsComponent,
    SexualAbuseComponent,
    QuizzComponent,
    FinalQuizComponent,
    AnnonymousSignUpComponent,
    ChatRoomComponent,
    NeedHelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

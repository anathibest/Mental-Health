import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { LoginComponent } from './login/login.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { TopicsComponent } from './topics/topics.component';
// import { QuizzComponent } from './quizz/quizz.component';
// import { SexualAbuseComponent } from './sexual-abuse/sexual-abuse.component';

// Added Components
import { HomeComponent } from "./components/home/home.component";
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "/" },
  { path: "", pathMatch: "full", redirectTo: "/" },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignUpComponent },
  // { path: 'topics', component: TopicsComponent },
  // { path: 'quizz', component: QuizzComponent },
  // { path: 'sexualAbuse', component: SexualAbuseComponent },

  // { path: '404', component: PageNotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

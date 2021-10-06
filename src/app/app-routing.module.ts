import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Added Components
import { HomeComponent } from "./components/home/home.component";
import { ThoughtRecordComponent } from "./components/thoughtRecord/thoughtRecord.component";
import { LiveConsultantComponent } from "./live-consultant/live-consultant.component";
import { QuizzComponent } from "./components/quizz/quizz.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "/" },
  { path: "", pathMatch: "full", redirectTo: "/" },
  { path: "thoughts", component: ThoughtRecordComponent },
  { path: "chats", component: LiveConsultantComponent },
  { path: "quizz", component: QuizzComponent },

  // { path: '404', component:},
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

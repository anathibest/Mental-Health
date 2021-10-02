import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Added Components
import { HomeComponent } from "./components/home/home.component";
import { ThoughtRecordComponent } from "./components/thoughtRecord/thoughtRecord.component";
import { LiveConsultantComponent } from "./live-consultant/live-consultant.component";
import { OptionsComponent } from "./components/options/options.component";
import { QuizzComponent } from "./components/quizz/quizz.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "/" },
  { path: "", pathMatch: "full", redirectTo: "/" },
  { path: "thoughs", component: ThoughtRecordComponent },
  { path: "live",component:LiveConsultantComponent},
  { path: "options",component: OptionsComponent},
  { path: "quizz",component: QuizzComponent},


  // { path: '404', component:},
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

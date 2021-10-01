<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveConsultantComponent } from './live-consultant/live-consultant.component';

=======
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
>>>>>>> 9a9f0b875380e068ffe87fbfc0aa2765b528bb3e

// Added Components
import { HomeComponent } from "./components/home/home.component";
import { ThoughtRecordComponent } from "./components/thoughtRecord/thoughtRecord.component";

const routes: Routes = [
<<<<<<< HEAD
	{ path: '', component: HomeComponent },
	{ path: '', pathMatch: 'full', redirectTo: '/' },
	{ path: '', pathMatch: 'full', redirectTo: '/' },
	{ path: 'chart', component :LiveConsultantComponent },
	
=======
  { path: "", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "/" },
  { path: "", pathMatch: "full", redirectTo: "/" },
  { path: "thoughs", component: ThoughtRecordComponent },
>>>>>>> 9a9f0b875380e068ffe87fbfc0aa2765b528bb3e

  // { path: '404', component:},
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

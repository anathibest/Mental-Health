import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveConsultantComponent } from './live-consultant/live-consultant.component';


// Added Components
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', pathMatch: 'full', redirectTo: '/' },
	{ path: '', pathMatch: 'full', redirectTo: '/' },
	{ path: 'chart', component :LiveConsultantComponent },
	

	// { path: '404', component:},
	{ path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

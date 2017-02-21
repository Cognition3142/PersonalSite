import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunningToDoComponent } from './components/runningtodo.component';
import { CurriculumVitaeComponent } from './components/curriculum-vitae.component';

const routes: Routes = [
  { path: '', redirectTo: '/curriculumvitae', pathMatch: 'full' },
  { path: 'runningtodo', component: RunningToDoComponent },
  { path: 'adventures', component: RunningToDoComponent },
  { path: 'curriculumvitae', component: CurriculumVitaeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

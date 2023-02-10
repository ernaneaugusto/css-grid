import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LessonComponent } from './lesson/lesson.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  { path: '', component: LessonComponent },
  { path: 'grid', component: TestingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

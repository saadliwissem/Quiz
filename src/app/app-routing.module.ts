import { StudentsinfoComponent } from './shared/widgets/studentsinfo/studentsinfo.component';
import { QCMComponent } from './modules/qcm/qcm.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewLanguageComponent } from './modules/new-language/new-language.component';
import { StudentsComponent } from './modules/students/students.component';

const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },{
    path:'note',
    component: PostsComponent
  },{
    path:'qcm',
    component: QCMComponent,
    
  },{
    path:'qcm/addLanguage',
    component: NewLanguageComponent,
    
  },{
    path:'students',
    component: StudentsComponent,
    
  },{
    path:'studentsinfo',
    component: StudentsinfoComponent,
    
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

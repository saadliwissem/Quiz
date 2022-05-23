import { StudentsinfoComponent } from './shared/widgets/studentsinfo/studentsinfo.component';
import { QCMComponent } from './modules/qcm/qcm.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewLanguageComponent } from './modules/new-language/new-language.component';
import { StudentsComponent } from './modules/students/students.component';
import { AddStudentComponent } from './shared/components/add-student/add-student.component';
import { EditStudentComponent } from './shared/components/edit-student/edit-student.component';
import { StudentsListComponent } from './shared/components/students-list/students-list.component';
import { EditLanguageComponent } from './modules/edit-language/edit-language.component';

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
    
  },
  {
    path:'qcm/editlanguage',
    component: EditLanguageComponent,
    
  },{
    path:'students',
    component: StudentsComponent,
    
  },{
    path:'studentsinfo',
    component: StudentsinfoComponent,
    
  },{
    path:'addstudent',
    component: AddStudentComponent,
    
  },{
    path:'editstudent',
    component: EditStudentComponent,
    
  },{
    path:'studentlist',
    component: StudentsListComponent,
    
  },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

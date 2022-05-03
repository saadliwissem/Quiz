import { QCMComponent } from './modules/qcm/qcm.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewLanguageComponent } from './modules/new-language/new-language.component';

const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },{
    path:'posts',
    component: PostsComponent
  },{
    path:'qcm',
    component: QCMComponent,
    
  },{
    path:'qcm/addLanguage',
    component: NewLanguageComponent,
    
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

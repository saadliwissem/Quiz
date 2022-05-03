import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from './../../modules/dashboard.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './../../shared/shared/shared.module';
import { PostsComponent } from './../../modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import{MatPaginatorModule} from '@angular/material/paginator'
import{MatTableModule} from '@angular/material/table'
import { QCMComponent } from '../../modules/qcm/qcm.component';
import { NewLanguageComponent } from '../../modules/new-language/new-language.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {  MatInputModule } from '@angular/material/input';






@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    QCMComponent,
    NewLanguageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule

   
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }

import { PieComponent } from './../widgets/pie/pie.component';
import { CardComponent } from './../widgets/card/card.component';
import { AreaComponent } from './../widgets/area/area.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './../components/sidebar/sidebar.component';
import { FooterComponent } from './../components/footer/footer.component';
import { HeaderComponent } from './../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableComponent } from '../widgets/table/table.component';
import { StudentsinfoComponent } from '../widgets/studentsinfo/studentsinfo.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    StudentsinfoComponent,
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule 
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    StudentsinfoComponent,
    
  ]
})
export class SharedModule { }

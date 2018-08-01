import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api'; 
import { TreeModule } from 'primeng/tree';


import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { NodeService } from './node.service';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    TreeModule  
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

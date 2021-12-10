import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { calciComponent } from './calci/calci.component';
import { companyComponent } from './company/company.component';
import { studentComponent } from './student/student.component';

// imported FormsModule in imports array so that we can use [(ngModel)],
// without FormsModule import [(ngModel)] will not work in html

// All components should be mentioned in respective declerations array,
// of app module or any module
@NgModule({
  declarations: [
    AppComponent,
    studentComponent,
    companyComponent,
    calciComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

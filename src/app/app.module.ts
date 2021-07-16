import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { ListStudentsComponent } from './Students/list-students/list-students.component';
import { CreateStudentsComponent } from './Students/create-students/create-students.component';
import { ListTeachersComponent } from './Teachers/list-teachers/list-teachers.component';
import { CreateTeachersComponent } from './Teachers/create-teachers/create-teachers.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpdateStudentsComponent } from './Students/update-students/update-students.component';
import { UpdateTeachersComponent } from './Teachers/update-teachers/update-teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListStudentsComponent,
    CreateStudentsComponent,
    ListTeachersComponent,
    CreateTeachersComponent,
    UpdateStudentsComponent,
    UpdateTeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

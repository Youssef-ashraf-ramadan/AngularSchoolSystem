import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentsComponent } from './Students/create-students/create-students.component';
import { ListStudentsComponent } from './Students/list-students/list-students.component';
import { UpdateStudentsComponent } from './Students/update-students/update-students.component';
import { CreateTeachersComponent } from './Teachers/create-teachers/create-teachers.component';
import { ListTeachersComponent } from './Teachers/list-teachers/list-teachers.component';
import { UpdateTeachersComponent } from './Teachers/update-teachers/update-teachers.component';


const routes: Routes = [
   { path : "home" , component : CreateStudentsComponent},
  { path : "" , component : CreateStudentsComponent},
  { path : "CreateStudents" , component : CreateStudentsComponent},
  { path : "createstudents" , component : CreateStudentsComponent},
  { path : "cs" , component : CreateStudentsComponent},
  { path : "CS" , component : CreateStudentsComponent},
  { path : "CreateTeachers" , component : CreateTeachersComponent},
  { path : "createteachers" , component : CreateTeachersComponent},
  { path : "ct" , component : CreateTeachersComponent},
  { path : "CT" , component : CreateTeachersComponent},
  { path : "ListStudents" , component : ListStudentsComponent},
  { path : "liststudents" , component : ListStudentsComponent},
  { path : "ListTeachers" , component : ListTeachersComponent},
  { path : "listteachers" , component : ListTeachersComponent},
  { path : "LS" , component : ListStudentsComponent},
  { path : "ls" , component : ListStudentsComponent},
  { path : "LT" , component : ListTeachersComponent},
  { path : "lt" , component : ListTeachersComponent},
  { path : "UpdateStudents" , component : UpdateStudentsComponent},
  { path : "updatestudents" , component : UpdateStudentsComponent},
  { path : "UpdateTeachers" , component : UpdateTeachersComponent},
  { path : "updateteachers" , component : UpdateTeachersComponent},
  { path : "ls/:id" , component : UpdateTeachersComponent},
  { path : "ListTeachers/:id" , component : UpdateTeachersComponent},
  { path : "listteachers/:id" , component : UpdateTeachersComponent},
  { path : "ListStudents/:id" , component : UpdateStudentsComponent},
  { path : "liststudents/:id" , component : UpdateStudentsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

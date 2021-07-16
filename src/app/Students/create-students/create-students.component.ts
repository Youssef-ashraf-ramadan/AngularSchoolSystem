import { Component, OnInit } from '@angular/core';

import { Students } from 'src/app/models/Students';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/shared/students.service';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {
info : Students = new Students ; 
  constructor(private seva : StudentsService , private router : Router) { }

  ngOnInit(): void {
  }
send(){
  this.seva.Post(this.info).subscribe((data :any ) =>{
  this.router.navigateByUrl('ListStudents')
  })
 
}


}

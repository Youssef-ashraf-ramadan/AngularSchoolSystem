import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teachers } from 'src/app/models/Teachers';
import { TeachersService } from 'src/app/shared/teachers.service';

@Component({
  selector: 'app-create-teachers',
  templateUrl: './create-teachers.component.html',
  styleUrls: ['./create-teachers.component.css']
})
export class CreateTeachersComponent implements OnInit {
TeacherInfo : Teachers = new Teachers
  constructor(private sev : TeachersService , private router : Router) { }

  ngOnInit(): void {
  }
save(){
this.sev.Post(this.TeacherInfo).subscribe((data:any) =>{
  this.router.navigateByUrl('ListTeachers')
})
}
}

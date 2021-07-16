import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Students } from 'src/app/models/Students';
import { StudentsService } from 'src/app/shared/students.service';

@Component({
  selector: 'app-update-students',
  templateUrl: './update-students.component.html',
  styleUrls: ['./update-students.component.css']
})
export class UpdateStudentsComponent implements OnInit {
  info : Students = new Students ; 
  id;
  constructor(private sevvv : StudentsService , private router : Router , private activeRoute : ActivatedRoute ) { 
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    this.sevvv.getbyid(this.id).subscribe((data:any)=>{
      this.info = data
    })

  }

  ngOnInit(): void {
  }

  update(){
    this.sevvv.PuttData(this.info , this.id ).subscribe((data:any)=>{
      this.router.navigateByUrl('ListStudents')
    })
  }
}

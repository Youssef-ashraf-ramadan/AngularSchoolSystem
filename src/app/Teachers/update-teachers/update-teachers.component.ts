import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teachers } from 'src/app/models/Teachers';
import { TeachersService } from 'src/app/shared/teachers.service';

@Component({
  selector: 'app-update-teachers',
  templateUrl: './update-teachers.component.html',
  styleUrls: ['./update-teachers.component.css']
})
export class UpdateTeachersComponent implements OnInit {
  TeacherInfo : Teachers = new Teachers
id;
  constructor(private sevav : TeachersService , private activeRoute : ActivatedRoute , private router : Router) { 
 this.id =    this.activeRoute.snapshot.paramMap.get('id') 
    this.sevav.getbyid(this.id).subscribe((data:any)=> {
      this.TeacherInfo = data
    })
  }

  ngOnInit(): void {
  }

 update(){
    this.sevav.PuttData(this.TeacherInfo , this.id).subscribe((data:any) => {
       this.router.navigateByUrl('listteachers')
    })
 }
}

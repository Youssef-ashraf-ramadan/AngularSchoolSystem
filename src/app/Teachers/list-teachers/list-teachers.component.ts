import { Component, OnInit } from '@angular/core';
import { Teachers } from 'src/app/models/Teachers';
import { TeachersService } from 'src/app/shared/teachers.service';


@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {
TeacherData : Teachers [];
  constructor(private servee : TeachersService) { 
  this.servee.getData().subscribe((data:any)=>{
    this.TeacherData = data
  })
  }


  ngOnInit(): void {
  }

  delete(id){
    if(confirm("Are you sure to delete "+id)) {
      // Save it!
      this.servee.DeleteData(id).subscribe((data:any) =>{
        location.reload()
      })
    }else{
      //do nothing
    }
      
    
   
  }
}



import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/Students';
import { StudentsService } from 'src/app/shared/students.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  StudentsData : Students []
  constructor(private sev : StudentsService ) { 
    this.sev.getData().subscribe((data:any) =>{
this.StudentsData = data

    })
  }

  ngOnInit(): void {
  }

  delete (id){
    if (confirm("Are you sure to delete "+id)) {
      // Save it!
      this.sev.DeleteData(id).subscribe((data:any) =>{
        location.reload()
      })
   
    } else {
      // Do nothing!
     
    }
    
    
    
  
  }

}

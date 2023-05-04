import { StudentsService } from './students.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Departement';
  data:any=[];
  data1:any=[];

  filterTerm!: string;
  
 
  data2=[] as any;
  myObj= Object;


  
  
  constructor(private student:StudentsService)
  {
  this.student.getData().subscribe(data=>
    {
        this.data=data
    })

    this.student.getDataStudent().subscribe(data1=>
      {
          this.data1=data1
      })
      
    
  

  }
  

}

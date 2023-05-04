import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  constructor(private http:HttpClient) { }
  
  getData()
  {
    let url="http://localhost:8088/departement/getDep";
    return this.http.get(url);
  }

  getDataStudent()
  {
    let url="http://localhost:8088/student/getStudent";
    return this.http.get(url);
  }

  getDataStudentDepartement()
  {
    let url="http://localhost:8088/departement/id/1";
    return this.http.get(url);
  }


}




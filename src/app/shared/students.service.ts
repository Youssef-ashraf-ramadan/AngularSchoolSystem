import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';
import { Students } from './../models/Students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends ApiFunctionService <Students> {

  constructor(http : HttpClient) {
    super("http://localhost:3000/Students" , http );
  }
}






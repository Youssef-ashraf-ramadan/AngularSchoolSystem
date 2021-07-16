import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Teachers } from 'src/app/models/Teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService extends ApiFunctionService <Teachers>{

  constructor(http : HttpClient) {
    super("  http://localhost:3000/teachers" , http );
  }
}

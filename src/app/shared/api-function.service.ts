import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService <T>{

  constructor( @Inject (String) private  ConfigUrl : string , private http : HttpClient) { }

  getData () : Observable <T> {
   return this.http.get<T>(this.ConfigUrl)
   
}



getbyid(id){
  return this.http.get<T>(this.ConfigUrl + `/${id}`)
}


Post(mode : T) : Observable <T> {
  return this.http.post <T> (this.ConfigUrl , mode)
}

DeleteData(id) : Observable <T> {
  return this.http.delete <T> (this.ConfigUrl + `/${id}`)
}
PuttData(model , id) :Observable <T> {
  return this.http.put<T> (this.ConfigUrl + `/${id}` , model )
}

}

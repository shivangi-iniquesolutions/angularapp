import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';  
import { Observable } from 'rxjs';  
@Injectable()  
export class TestService {  
   constructor(private http: HttpClient) { }  
      getBaseUrl() {  
      return 'https://nodejslearn.herokuapp.com/';  
   }  
getTestMessage(): Observable<any> {  
   const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});  
   return this.http.get('api/user', {responseType: 'text', headers});  
 }  
}  
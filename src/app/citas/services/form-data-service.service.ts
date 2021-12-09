import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataServiceService {

  constructor(private http: HttpClient) { }

  getDataFromSheet():Observable<any>{
    // return this.http.get("https://sheet.best/api/sheets/3794141c-4cd1-458d-b916-66c42e392ecd");

    return this.http.get("https://sheet.best/api/sheets/64f0fb14-aa5a-45b0-9d6f-7e5dea0fdee3");

  }

  getDataById(id:any):Observable<any>{
    // return this.http.get("https://sheet.best/api/sheets/3794141c-4cd1-458d-b916-66c42e392ecd/identificadorCita/"+id);
    return this.http.get("https://sheet.best/api/sheets/64f0fb14-aa5a-45b0-9d6f-7e5dea0fdee3/identificadorCita/"+id);
  }

  putData(user: any, idForm: any):Observable<any>{
    // return this.http.put("https://sheet.best/api/sheets/3794141c-4cd1-458d-b916-66c42e392ecd/"+idForm, user)
    return this.http.put("https://sheet.best/api/sheets/64f0fb14-aa5a-45b0-9d6f-7e5dea0fdee3/"+idForm, user)
  }
}

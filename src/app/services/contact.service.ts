// src/app/services/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactApiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) { }

  sendMessage(formData: ContactFormPayload): Observable<any> {
    return this.http.post<any>(this.contactApiUrl, formData);
  }
}

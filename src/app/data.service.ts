// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getServicesData(): Observable<any[]> {
    return of([
      { id: 1, name: 'Service 1', description: 'Description of service 1' },
      { id: 2, name: 'Service 2', description: 'Description of service 2' },
      { id: 3, name: 'Service 3', description: 'Description of service 3' }
    ]);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  sendMessage(data: any): Observable<boolean> {
    console.log('Sending to backend:', data);

    return of(true).pipe(delay(1000));
  }
}

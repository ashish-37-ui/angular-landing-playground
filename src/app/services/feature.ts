import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Feature {
  title: string;
  desc: string;
}

@Injectable({
  providedIn: 'root',
})

export class FeatureService {

 getFeatures(): Observable<Feature[]> {
    return of([
      { title: 'Fast', desc: 'Optimized rendering' },
      { title: 'Scalable', desc: 'Grows with your app' },
      { title: 'Modern', desc: 'Standalone Angular architecture' }
    ]).pipe(
      delay(800)
    );
  }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggle() {
    document.body.classList.toggle('dark');
  }
}


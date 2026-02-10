import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() buttonText = '';

  scrollToFeatures() {
    const el = document.getElementById('features');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}

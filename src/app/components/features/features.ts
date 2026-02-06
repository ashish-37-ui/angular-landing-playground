import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class FeaturesComponent {
  features = [
    { title: 'Fast', desc: 'Optimized rendering' },
    { title: 'Scalable', desc: 'Grows with your app' },
    { title: 'Modern', desc: 'Standalone Angular' }
  ];
}

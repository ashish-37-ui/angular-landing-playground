import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { FeaturesComponent } from '../../components/features/features';

@Component({
  selector: 'app-home',
  standalone : true,
  imports: [HeroComponent, FeaturesComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

}

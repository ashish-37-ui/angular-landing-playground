import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { FeaturesComponent } from '../../components/features/features';
import { FeatureService, Feature } from '../../services/feature';


@Component({
  selector: 'app-home',
  standalone : true,
  imports: [NgIf, HeroComponent, FeaturesComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class HomeComponent implements OnInit {

  featureList: Feature[] = [];
  loading = true;

  constructor(private featureService: FeatureService) {}

ngOnInit() {
    this.featureService.getFeatures().subscribe(features => {
      this.featureList = features;
      this.loading = false;
    });
  }
}

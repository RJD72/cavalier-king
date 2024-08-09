import { Component, OnInit, ViewChild } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Dogs } from '../../model/dogs';
import { NgFor, NgIf } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-puppies',
  standalone: true,
  imports: [NgFor, CarouselComponent, NgIf],
  templateUrl: './puppies.component.html',
  styleUrl: './puppies.component.css',
})
export class PuppiesComponent implements OnInit {
  @ViewChild('carousel') carousel!: CarouselComponent;
  puppies: Dogs[];

  constructor(private dogsService: DogsService) {
    this.puppies = [];
  }

  ngOnInit(): void {
    this.puppies = this.dogsService.getDogs();
  }
}

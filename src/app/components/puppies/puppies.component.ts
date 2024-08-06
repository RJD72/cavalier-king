import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Dogs } from '../../model/dogs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-puppies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './puppies.component.html',
  styleUrl: './puppies.component.css',
})
export class PuppiesComponent implements OnInit {
  puppies: Dogs[];

  constructor(private dogsService: DogsService) {
    this.puppies = [];
  }

  ngOnInit(): void {
    this.puppies = this.dogsService.getDogs();
  }
}

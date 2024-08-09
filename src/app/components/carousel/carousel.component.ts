import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Dogs } from '../../model/dogs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  puppies: Dogs[];
  currentSlide: number = 0;
  isCarouselVisible: boolean = false;

  constructor(private dogsService: DogsService) {
    this.puppies = [];
  }

  ngOnInit(): void {
    this.puppies = this.dogsService.getDogs();
  }

  getPuppiesLength(): number {
    // Assuming you have a puppies array in your component
    return this.puppies.length;
  }

  nextSlide(): void {
    const totalSlides = this.getPuppiesLength();
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
    this.updateSlide();
  }

  prevSlide(): void {
    const totalSlides = this.getPuppiesLength();
    this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
    this.updateSlide();
  }

  updateSlide(): void {
    const slides = document.querySelectorAll('[data-twe-carousel-item]');
    slides.forEach((slide, index) => {
      slide.classList.toggle('hidden', index !== this.currentSlide);
    });
  }

  openCarousel(index: number): void {
    this.isCarouselVisible = true;
    this.currentSlide = index;
    this.updateSlide();
    const carouselElement = document.getElementById('carouselExampleCaptions');
    if (carouselElement) {
      carouselElement.classList.remove('hidden');
    }
  }

  closeCarousel(): void {
    this.isCarouselVisible = false;
    const carouselElement = document.getElementById('carouselExampleCaptions');
    if (carouselElement) {
      carouselElement.classList.add('hidden');
    }
  }
}

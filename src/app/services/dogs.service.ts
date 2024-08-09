import { Injectable } from '@angular/core';
import { Dogs } from '../model/dogs';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  constructor() {}

  getDogs(): Dogs[] {
    return [
      {
        id: 1,
        gender: 'male',
        weight: '1lbs',
        dateBorn: 'July, 10, 2024',
        imageSrc: 'assets/dogs/dog1.avif',
        isSold: true,
      },
      {
        id: 2,
        gender: 'male',
        weight: '1lbs',
        dateBorn: 'July, 10, 2024',
        imageSrc: 'assets/dogs/dog2.avif',
        isSold: false,
      },
      {
        id: 3,
        gender: 'male',
        weight: '1lbs',
        dateBorn: 'July, 10, 2024',
        imageSrc: 'assets/dogs/dog3.avif',
        isSold: false,
      },
      {
        id: 4,
        gender: 'male',
        weight: '1lbs',
        dateBorn: 'July, 10, 2024',
        imageSrc: 'assets/dogs/dog4.avif',
        isSold: false,
      },
      {
        id: 5,
        gender: 'male',
        weight: '1lbs',
        dateBorn: 'July, 10, 2024',
        imageSrc: 'assets/dogs/dog5.avif',
        isSold: false,
      },
    ];
  }
}

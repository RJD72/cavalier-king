import { Injectable } from '@angular/core';
import { FAQs } from '../model/faq';

@Injectable({
  providedIn: 'root',
})
export class FrequentlyAskedQuestionsService {
  constructor() {}

  getQuestions(): FAQs[] {
    return [
      {
        question: 'What is the temperament of a Cavalier King Charles Spaniel?',
        answer:
          'Cavaliers are known for their friendly, affectionate, and gentle nature. They are great with children, other pets, and are generally very social dogs. They love to be around people and are often described as "lap dogs" because they enjoy cuddling and being close to their owners.',
      },
      {
        question: 'How big do Cavalier King Charles Spaniels get?',
        answer:
          'Cavaliers are a small breed, typically weighing between 13 to 18 pounds (5.9 to 8.2 kg) and standing 12 to 13 inches (30 to 33 cm) tall at the shoulder. They have a compact, well-proportioned build.',
      },
      {
        question:
          'What are the grooming requirements for a Cavalier King Charles Spaniel?',
        answer:
          'Cavaliers have a silky, medium-length coat that requires regular grooming to prevent mats and tangles. Brushing several times a week is recommended, along with occasional baths. Their ears should also be checked regularly for signs of infection, and their nails should be trimmed as needed.',
      },
      {
        question:
          'Are Cavalier King Charles Spaniels good with children and other pets?',
        answer:
          "Yes, Cavaliers are known for their gentle and friendly nature, making them great companions for children and other pets. However, as with any breed, it's important to supervise interactions between young children and dogs to ensure safety for both.",
      },
      {
        question:
          'What health issues are common in Cavalier King Charles Spaniels?',
        answer:
          'Cavaliers are prone to certain health issues, including mitral valve disease (a heart condition), syringomyelia (a neurological condition), hip dysplasia, and eye problems. Reputable breeders perform health testing on their breeding dogs to minimize the risk of these conditions.',
      },
      {
        question:
          'How much exercise does a Cavalier King Charles Spaniel need?',
        answer:
          'Cavaliers are moderately active dogs that enjoy daily walks and playtime. They typically need about 30 to 60 minutes of exercise each day. They are also content to relax indoors, making them suitable for both active and more laid-back households.',
      },
      {
        question: 'Do Cavalier King Charles Spaniels bark a lot?',
        answer:
          'Cavaliers are generally not excessive barkers, but like any dog, they may bark to alert their owners of something unusual. Proper training and socialization can help manage any barking tendencies.',
      },
      {
        question: 'What is the lifespan of a Cavalier King Charles Spaniel?',
        answer:
          'The average lifespan of a Cavalier King Charles Spaniel is around 10 to 14 years, though with proper care, they can live longer.',
      },
      {
        question: 'Are Cavalier King Charles Spaniels easy to train?',
        answer:
          'Yes, Cavaliers are intelligent and eager to please, which makes them relatively easy to train. They respond well to positive reinforcement techniques such as treats, praise, and play. Early socialization and consistent training are important to help them develop into well-behaved adult dogs.',
      },
      {
        question:
          'Do Cavalier King Charles Spaniels have any special dietary needs?',
        answer:
          "Cavaliers do not have specific dietary requirements beyond what is typical for small dogs. It's important to feed them a balanced, high-quality dog food that is appropriate for their age, size, and activity level. Monitor their weight and adjust food portions to prevent obesity, which can exacerbate health issues.",
      },
      {
        question:
          'Can Cavalier King Charles Spaniels be left alone during the day?',
        answer:
          "Cavaliers are companion dogs that thrive on human interaction and can suffer from separation anxiety if left alone for long periods. If you need to leave them alone, ensure they have toys and activities to keep them occupied, and consider a pet sitter or dog walker if you'll be gone for an extended time.",
      },
      {
        question:
          'How often should a Cavalier King Charles Spaniel visit the vet?',
        answer:
          "Regular veterinary check-ups are essential for maintaining your Cavalier's health. Puppies should have more frequent visits for vaccinations and growth monitoring, while adult dogs should have annual check-ups. Senior Cavaliers may benefit from twice-yearly visits.",
      },
      {
        question: 'What colors do Cavalier King Charles Spaniels come in?',
        answer:
          'Cavaliers come in four recognized colors: Blenheim (chestnut and white), Tricolor (black, white, and tan), Ruby (solid red), and Black and Tan (black with tan markings).',
      },
      {
        question: 'Do Cavalier King Charles Spaniels shed a lot?',
        answer:
          'Cavaliers do shed, but their shedding is moderate. Regular grooming can help manage shedding and keep their coat in good condition.',
      },
      {
        question: 'Are Cavalier King Charles Spaniels hypoallergenic?',
        answer:
          'No, Cavaliers are not hypoallergenic. They do shed and produce dander, which can trigger allergies in sensitive individuals.',
      },
    ];
  }
}

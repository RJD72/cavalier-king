import { Component, OnInit } from '@angular/core';
import { FrequentlyAskedQuestionsService } from '../../services/frequently-asked-questions.service';
import { FAQs } from '../../model/faq';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-frequently-asked-questions',
  standalone: true,
  imports: [NgFor],
  templateUrl: './frequently-asked-questions.component.html',
  styleUrl: './frequently-asked-questions.component.css',
})
export class FrequentlyAskedQuestionsComponent implements OnInit {
  faqs: FAQs[];

  constructor(private faqService: FrequentlyAskedQuestionsService) {
    this.faqs = [];
  }

  ngOnInit(): void {
    this.faqs = this.faqService.getQuestions();
  }
}

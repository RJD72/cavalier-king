import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrquentlyAskedQuestionsComponent } from './frequently-asked-questions.component';

describe('FrquentlyAskedQuestionsComponent', () => {
  let component: FrquentlyAskedQuestionsComponent;
  let fixture: ComponentFixture<FrquentlyAskedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrquentlyAskedQuestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrquentlyAskedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

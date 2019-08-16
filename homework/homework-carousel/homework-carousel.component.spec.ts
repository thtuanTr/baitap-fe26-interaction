import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkCarouselComponent } from './homework-carousel.component';

describe('HomeworkCarouselComponent', () => {
  let component: HomeworkCarouselComponent;
  let fixture: ComponentFixture<HomeworkCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

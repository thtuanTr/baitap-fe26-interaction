import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkLaptopComponent } from './homework-laptop.component';

describe('HomeworkLaptopComponent', () => {
  let component: HomeworkLaptopComponent;
  let fixture: ComponentFixture<HomeworkLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

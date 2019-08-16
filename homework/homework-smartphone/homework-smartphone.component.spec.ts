import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkSmartphoneComponent } from './homework-smartphone.component';

describe('HomeworkSmartphoneComponent', () => {
  let component: HomeworkSmartphoneComponent;
  let fixture: ComponentFixture<HomeworkSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

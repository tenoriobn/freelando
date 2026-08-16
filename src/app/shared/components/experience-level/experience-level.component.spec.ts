import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceLevelComponent } from './experience-level.component';

describe('ExperienceLevelComponent', () => {
  let component: ExperienceLevelComponent;
  let fixture: ComponentFixture<ExperienceLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOptionComponent } from './radio-option.component';

describe('RadioOptionComponent', () => {
  let component: RadioOptionComponent;
  let fixture: ComponentFixture<RadioOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPessoaisFormComponent } from './dados-pessoais-form.component';

describe('DadosPessoaisFormComponent', () => {
  let component: DadosPessoaisFormComponent;
  let fixture: ComponentFixture<DadosPessoaisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosPessoaisFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosPessoaisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

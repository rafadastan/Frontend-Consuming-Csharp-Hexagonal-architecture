import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasConsultaComponent } from './pessoas-consulta.component';

describe('PessoasConsultaComponent', () => {
  let component: PessoasConsultaComponent;
  let fixture: ComponentFixture<PessoasConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

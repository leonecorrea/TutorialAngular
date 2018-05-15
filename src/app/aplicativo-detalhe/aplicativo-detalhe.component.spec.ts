import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicativoDetalheComponent } from './aplicativo-detalhe.component';

describe('AplicativoDetalheComponent', () => {
  let component: AplicativoDetalheComponent;
  let fixture: ComponentFixture<AplicativoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicativoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicativoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

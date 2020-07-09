import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFisicaComponent } from './clientesFisica.component';

describe('ClientesFisicaComponent', () => {
  let component: ClientesFisicaComponent;
  let fixture: ComponentFixture<ClientesFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

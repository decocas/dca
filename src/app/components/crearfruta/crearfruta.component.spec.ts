import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearfrutaComponent } from './crearfruta.component';

describe('CrearfrutaComponent', () => {
  let component: CrearfrutaComponent;
  let fixture: ComponentFixture<CrearfrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearfrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearfrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

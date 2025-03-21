import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaTextoComponent } from './pelicula-texto.component';

describe('PeliculaTextoComponent', () => {
  let component: PeliculaTextoComponent;
  let fixture: ComponentFixture<PeliculaTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaTextoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

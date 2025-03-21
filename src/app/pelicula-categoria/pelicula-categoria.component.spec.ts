import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaCategoriaComponent } from './pelicula-categoria.component';

describe('PeliculaCategoriaComponent', () => {
  let component: PeliculaCategoriaComponent;
  let fixture: ComponentFixture<PeliculaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaCategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

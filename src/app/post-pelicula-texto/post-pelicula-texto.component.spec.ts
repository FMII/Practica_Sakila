import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPeliculaTextoComponent } from './post-pelicula-texto.component';

describe('PostPeliculaTextoComponent', () => {
  let component: PostPeliculaTextoComponent;
  let fixture: ComponentFixture<PostPeliculaTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPeliculaTextoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPeliculaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

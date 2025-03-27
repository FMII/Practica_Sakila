import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPeliculaCategoriaComponent } from './post-pelicula-categoria.component';

describe('PostPeliculaCategoriaComponent', () => {
  let component: PostPeliculaCategoriaComponent;
  let fixture: ComponentFixture<PostPeliculaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPeliculaCategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPeliculaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

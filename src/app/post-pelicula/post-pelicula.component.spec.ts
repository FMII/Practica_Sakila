import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPeliculaComponent } from './post-pelicula.component';

describe('PostPeliculaComponent', () => {
  let component: PostPeliculaComponent;
  let fixture: ComponentFixture<PostPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPeliculaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

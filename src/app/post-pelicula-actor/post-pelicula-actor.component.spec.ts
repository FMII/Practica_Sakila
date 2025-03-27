import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPeliculaActorComponent } from './post-pelicula-actor.component';

describe('PostPeliculaActorComponent', () => {
  let component: PostPeliculaActorComponent;
  let fixture: ComponentFixture<PostPeliculaActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPeliculaActorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPeliculaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

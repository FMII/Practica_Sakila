import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClienteComponent } from './post-cliente.component';

describe('PostClienteComponent', () => {
  let component: PostClienteComponent;
  let fixture: ComponentFixture<PostClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

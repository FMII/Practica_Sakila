import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRentasComponent } from './post-rentas.component';

describe('PostRentasComponent', () => {
  let component: PostRentasComponent;
  let fixture: ComponentFixture<PostRentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostRentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostRentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

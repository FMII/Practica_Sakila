import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPagosComponent } from './post-pagos.component';

describe('PostPagosComponent', () => {
  let component: PostPagosComponent;
  let fixture: ComponentFixture<PostPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

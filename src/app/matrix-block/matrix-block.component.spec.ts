import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixBlockComponent } from './matrix-block.component';

describe('MatrixBlockComponent', () => {
  let component: MatrixBlockComponent;
  let fixture: ComponentFixture<MatrixBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

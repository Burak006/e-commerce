import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLimitComponent } from './product-limit.component';

describe('ProductLimitComponent', () => {
  let component: ProductLimitComponent;
  let fixture: ComponentFixture<ProductLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

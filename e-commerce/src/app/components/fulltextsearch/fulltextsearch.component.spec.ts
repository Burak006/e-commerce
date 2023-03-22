import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltextsearchComponent } from './fulltextsearch.component';

describe('FulltextsearchComponent', () => {
  let component: FulltextsearchComponent;
  let fixture: ComponentFixture<FulltextsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulltextsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulltextsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

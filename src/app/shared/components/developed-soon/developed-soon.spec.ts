import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopedSoon } from './developed-soon';

describe('DevelopedSoon', () => {
  let component: DevelopedSoon;
  let fixture: ComponentFixture<DevelopedSoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopedSoon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopedSoon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

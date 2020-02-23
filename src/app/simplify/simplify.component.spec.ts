import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifyComponent } from './simplify.component';

describe('SimplifyComponent', () => {
  let component: SimplifyComponent;
  let fixture: ComponentFixture<SimplifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

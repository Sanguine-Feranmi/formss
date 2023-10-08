import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidsComponent } from './custom-valids.component';

describe('CustomValidsComponent', () => {
  let component: CustomValidsComponent;
  let fixture: ComponentFixture<CustomValidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomValidsComponent]
    });
    fixture = TestBed.createComponent(CustomValidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

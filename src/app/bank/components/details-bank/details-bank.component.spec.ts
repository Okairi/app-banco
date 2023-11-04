import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBankComponent } from './details-bank.component';

describe('DetailsBankComponent', () => {
  let component: DetailsBankComponent;
  let fixture: ComponentFixture<DetailsBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsBankComponent]
    });
    fixture = TestBed.createComponent(DetailsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

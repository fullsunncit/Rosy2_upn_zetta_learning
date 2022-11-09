import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabelityComponent } from './availabelity.component';

describe('AvailabelityComponent', () => {
  let component: AvailabelityComponent;
  let fixture: ComponentFixture<AvailabelityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabelityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabelityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgMoreInfoComponent } from './pg-more-info.component';

describe('PgMoreInfoComponent', () => {
  let component: PgMoreInfoComponent;
  let fixture: ComponentFixture<PgMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgMoreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

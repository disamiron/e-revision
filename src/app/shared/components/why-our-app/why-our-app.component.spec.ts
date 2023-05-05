import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyOurAppComponent } from './why-our-app.component';

describe('WhyOurAppComponent', () => {
  let component: WhyOurAppComponent;
  let fixture: ComponentFixture<WhyOurAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyOurAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyOurAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

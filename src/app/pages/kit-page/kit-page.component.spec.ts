import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitPageComponent } from './kit-page.component';

describe('KitPageComponent', () => {
  let component: KitPageComponent;
  let fixture: ComponentFixture<KitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

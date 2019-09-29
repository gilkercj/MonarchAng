import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortGridComponent } from './port-grid.component';

describe('PortGridComponent', () => {
  let component: PortGridComponent;
  let fixture: ComponentFixture<PortGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

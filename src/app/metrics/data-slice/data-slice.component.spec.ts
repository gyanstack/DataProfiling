import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSliceComponent } from './data-slice.component';

describe('DataSliceComponent', () => {
  let component: DataSliceComponent;
  let fixture: ComponentFixture<DataSliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

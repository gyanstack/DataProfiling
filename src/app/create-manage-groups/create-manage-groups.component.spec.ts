import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManageGroupsComponent } from './create-manage-groups.component';

describe('CreateManageGroupsComponent', () => {
  let component: CreateManageGroupsComponent;
  let fixture: ComponentFixture<CreateManageGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManageGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManageGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

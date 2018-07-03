import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSetupListComponent } from './project-setup-list.component';

describe('ProjectSetupListComponent', () => {
  let component: ProjectSetupListComponent;
  let fixture: ComponentFixture<ProjectSetupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSetupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CreateManageGroupsModule } from './create-manage-groups.module';

describe('CreateManageGroupsModule', () => {
  let createManageGroupsModule: CreateManageGroupsModule;

  beforeEach(() => {
    createManageGroupsModule = new CreateManageGroupsModule();
  });

  it('should create an instance', () => {
    expect(createManageGroupsModule).toBeTruthy();
  });
});

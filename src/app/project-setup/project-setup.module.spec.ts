import { ProjectSetupModule } from './project-setup.module';

describe('ProjectSetupModule', () => {
  let projectSetupModule: ProjectSetupModule;

  beforeEach(() => {
    projectSetupModule = new ProjectSetupModule();
  });

  it('should create an instance', () => {
    expect(projectSetupModule).toBeTruthy();
  });
});

import { ExpandableTextModule } from './expandable-text.module';

describe('ExpandableTextModule', () => {
  let expandableTextModule: ExpandableTextModule;

  beforeEach(() => {
    expandableTextModule = new ExpandableTextModule();
  });

  it('should create an instance', () => {
    expect(expandableTextModule).toBeTruthy();
  });
});

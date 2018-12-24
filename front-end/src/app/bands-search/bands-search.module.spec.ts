import { BandsSearchModule } from './bands-search.module';

describe('BandsSearchModule', () => {
  let bandsSearchModule: BandsSearchModule;

  beforeEach(() => {
    bandsSearchModule = new BandsSearchModule();
  });

  it('should create an instance', () => {
    expect(bandsSearchModule).toBeTruthy();
  });
});

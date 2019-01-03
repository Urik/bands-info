import { TextEllipserModule } from './text-ellipser.module';

describe('TextEllipserModule', () => {
  let textEllipserModule: TextEllipserModule;

  beforeEach(() => {
    textEllipserModule = new TextEllipserModule();
  });

  it('should create an instance', () => {
    expect(textEllipserModule).toBeTruthy();
  });
});

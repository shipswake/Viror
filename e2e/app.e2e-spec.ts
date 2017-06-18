import { VirorPage } from './app.po';

describe('viror App', () => {
  let page: VirorPage;

  beforeEach(() => {
    page = new VirorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

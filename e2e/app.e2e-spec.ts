import { ImNgPage } from './app.po';

describe('im-ng App', function() {
  let page: ImNgPage;

  beforeEach(() => {
    page = new ImNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

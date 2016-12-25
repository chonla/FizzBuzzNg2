import { FizbuzzPage } from './app.po';

describe('fizbuzz App', function() {
  let page: FizbuzzPage;

  beforeEach(() => {
    page = new FizbuzzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

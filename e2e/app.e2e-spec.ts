import { MyserviceneedPage } from './app.po';

describe('myserviceneed App', function() {
  let page: MyserviceneedPage;

  beforeEach(() => {
    page = new MyserviceneedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

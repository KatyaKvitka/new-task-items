import { ItemsPage } from './app.po';

describe('items App', () => {
  let page: ItemsPage;

  beforeEach(() => {
    page = new ItemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

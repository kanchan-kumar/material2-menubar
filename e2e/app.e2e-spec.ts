import { Material2MenuBarPage } from './app.po';

describe('material2-menu-bar App', function() {
  let page: Material2MenuBarPage;

  beforeEach(() => {
    page = new Material2MenuBarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

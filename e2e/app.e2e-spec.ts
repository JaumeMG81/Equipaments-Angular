import { EquipamentsPage } from './app.po';

describe('equipaments App', () => {
  let page: EquipamentsPage;

  beforeEach(() => {
    page = new EquipamentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

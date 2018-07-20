import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "Angular Tinymce"', () => {
    expect(page.getTitleText()).toContain('Angular Tinymce');
  });

  it('should init global configured tinymce', () => {
    expect(page.getGlobalInstance()).toBeDefined();
  })
});

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root .center > h1')).getText();
  }

  getGlobalInstance() {
    return element(by.css('#global-config angular-tinymce .mce-tinymce'));
  }
}

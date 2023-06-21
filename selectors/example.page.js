export default class Hello {
  constructor(page) {
    this.page = page;
    // hello block locators
    this.hello = this.page.locator('.hello');
    this.title = this.hello.locator('.hello-title');
  }
}

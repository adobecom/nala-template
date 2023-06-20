export default class Quote {
  constructor(page) {
    this.page = page;
    // quote block locators
    this.quote = this.page.locator('.quote');
    this.quoteImage = this.quote.locator('.quote-image');
    this.quoteCopy = this.quote.locator('p.quote-copy');
    this.quoteFigCaption = this.quote.locator('p.figcaption');
    this.quoteFigCaptionCite = this.quote.locator('cite p');
    this.sectionDark = this.page.locator('.section.dark');
  }
}

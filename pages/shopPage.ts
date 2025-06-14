import { Page, Locator, expect } from "@playwright/test";

export class shopPageElements {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page; // Initialize the page object in the constructor
  }

  //This method navigates to the shop page. It uses parameter stored in util file call the toys that has to be added to the cart.
  async searchForToy(toyName: string, quantity: number) {
    const toyTitle = this.page.locator("h4.product-title", {
      hasText: toyName,
    });
    const toysList = this.page.locator("li.product", { has: toyTitle });
    const buyBtn = toysList.locator("a.btn-success", { hasText: "Buy" });
    await expect(toysList).toBeVisible();
    for (let i = 0; i < quantity; i++) {
      await buyBtn.click(); //click the buy button for the toy as per the quantity specified
    }
  }
}

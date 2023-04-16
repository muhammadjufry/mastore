import { chromium, Browser, Page } from "playwright";

let maxPages = 10;
let allProducts: any = [];
export default async function scrapeProducts(url: string): Promise<any> {
  console.log("\u2714 ", url);
  try {
    const browser: Browser = await chromium.launch();
    const context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
    });
    const page = await context.newPage();
    await page.goto(url, { timeout: 0 });
    await page.waitForLoadState("domcontentloaded");
    const getAllProducts = async (page: Page) => {
      return await page.evaluate(() => {
        let result: any[] = [];
        let productLists = document.querySelectorAll(
          ".sg-col-20-of-24.s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.s-widget-spacing-small.sg-col-12-of-16"
        );

        productLists.forEach((el) => {
          let product = {
            productTitle: el.querySelector<HTMLElement>(
              "a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal"
            )!?.innerText,
            image: el.querySelector<HTMLImageElement>(
              "div.s-product-image-container img"
            )!?.src,
            rating: el.querySelector<HTMLElement>(
              ".a-size-base.s-underline-text"
            )!?.innerText,
            price:
              el.querySelector<HTMLSpanElement>("span.a-offscreen")!?.innerText,
            stockLeft: el.querySelector<HTMLElement>(
              ".a-section.a-spacing-none.a-spacing-top-micro:last-child .a-row.a-size-base.a-color-secondary span.a-size-base.a-color-price"
            )!?.innerText,
            productSource: el.querySelector<HTMLAnchorElement>(
              ".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal"
            )!?.href,
          };
          result.push(product);
        });
        return result;
      });
    };
    allProducts.push(await getAllProducts(page));

    if (
      typeof (await page.$(
        ".s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-separator"
      )) !== null
    ) {
      let check =
        (await page.$(
          ".s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-separator"
        )) !== null;
      let paginationLink = check
        ? await page.$eval(
            ".s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-separator",
            (element) => element.getAttribute("href")
          )
        : null;

      if (paginationLink !== null) {
        maxPages -= 1;
        return await scrapeProducts(`https://amazon.com${paginationLink}`);
      }
    }

    await browser.close();
    return allProducts;
  } catch (error) {
    console.log(error);
  }
}

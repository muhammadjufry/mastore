import { chromium, Browser, Page } from "playwright";

let productDetail: any = [];
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
    const getProductDetail = async (page: Page) => {
      return await page.evaluate(() => {
        let result: any[] = [];
        let title =
          document.querySelector<HTMLElement>("#productTitle")!?.innerText;
        let image =
          document.querySelector<HTMLImageElement>("#landingImage")!?.src;

        let price = document.querySelector<HTMLElement>(
          "#corePrice_feature_div > div > span.a-price.aok-align-center > span.a-offscreen"
        )!?.innerText;
        let description = document.querySelector<HTMLElement>(
          "#featurebullets_feature_div"
        )!?.textContent;
        let stockLeft = document.querySelector<HTMLElement>(
          "#availability > span"
        )!?.innerText;
        result.push({
          title,
          image,
          price,
          description,
          stockLeft,
        });
        return result;
      });
    };
    productDetail.push(await getProductDetail(page));
    await browser.close();
    return productDetail;
  } catch (error) {
    console.log(error);
  }
}

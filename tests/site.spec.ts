import { test, expect } from "@playwright/test";
const routes = [
  "/",
  "/tentang",
  "/produk",
  "/koleksi",
  "/layanan",
  "/proyek",
  "/galeri",
  "/kontak",
];
for (const width of [390, 768, 1440]) {
  test(`all routes render without overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (
        message.type() === "warning" &&
        /resolve component|Hydration/i.test(message.text())
      )
        errors.push(message.text());
    });
    for (const route of routes) {
      const response = await page.goto(route, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("main")).not.toBeEmpty();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBeTruthy();
      for (const img of await page.locator("main img:visible").all()) {
        await img.scrollIntoViewIfNeeded();
        await expect
          .poll(() =>
            img.evaluate(
              (node: HTMLImageElement) =>
                node.complete && node.naturalWidth > 0,
            ),
          )
          .toBeTruthy();
      }
    }
    expect(errors).toEqual([]);
  });
}
test("product filters, URL state, details and keyboard close", async ({
  page,
}) => {
  await page.goto("/produk");
  await expect(page.locator(".product-card")).toHaveCount(15);
  await page.getByRole("button", { name: "Sofa", exact: true }).click();
  await expect(page.locator(".product-card")).toHaveCount(3);
  await expect(page).toHaveURL(/kategori=Sofa/);
  await page
    .locator(".product-card")
    .first()
    .getByRole("button", { name: /Lihat Detail/ })
    .click();
  await expect(page.locator("dialog[open]")).toBeVisible();
  await expect(page.locator("dialog[open] a")).toHaveAttribute("href", /wa.me/);
  await page.keyboard.press("Escape");
  await expect(page.locator("dialog[open]")).toHaveCount(0);
  await page.reload();
  await expect(page.locator(".product-card")).toHaveCount(3);
});
test("gallery filtering and lightbox", async ({ page }) => {
  await page.goto("/galeri");
  await page.getByRole("button", { name: "Material", exact: true }).click();
  await expect(page.locator(".gallery-grid button")).toHaveCount(1);
  await page.locator(".gallery-grid button").click();
  await expect(page.locator("dialog[open]")).toBeVisible();
  await page.getByRole("button", { name: "Tutup detail" }).click();
  await expect(page.locator("dialog[open]")).toHaveCount(0);
});
test("mobile menu navigation and transformation slider", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Buka menu" }).click();
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "Proyek" })
    .click();
  await expect(page).toHaveURL("/proyek");
  await expect(page.locator("#mobile-nav")).toHaveCount(0);
  const slider = page.getByRole("slider");
  await slider.focus();
  await page.keyboard.press("ArrowRight");
  await expect(slider).toHaveValue("51");
  await page
    .locator(".project-card")
    .first()
    .getByRole("button", { name: "Lihat Proyek →", exact: true })
    .click();
  await expect(page.locator("dialog[open]")).toBeVisible();
});
test("capture homepage", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
});

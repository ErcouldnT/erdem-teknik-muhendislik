import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("http://localhost:5173");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Erdem Teknik Mühendislik/);
});

test("copyright link", async ({ page }) => {
	await page.goto("http://localhost:5173");

	// Click the get copyright link.
	await page.getByRole("link", { name: "Ercode Labs" }).click();
	await expect(page).toHaveTitle(/erkut/gi);
});

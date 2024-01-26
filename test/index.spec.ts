import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("http://localhost:5173");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Erdem Teknik Mühendislik/);
});

test("get started link", async ({ page }) => {
	await page.goto("http://localhost:5173");

	// Click the get started link.
	await page.getByRole("link", { name: "Erkut" }).click();
	await expect(page).toHaveTitle(/erkut/gi);
});

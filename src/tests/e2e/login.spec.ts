import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import * as constants from "../constants";

test.describe.parallel("Login Page Tests", () => {
    test.beforeEach(async ({page}) => {
        console.log(page.url());
        await page.goto("http://localhost:4000/login");
        expect(page).toHaveURL(/.*login/);
    })

    test("Login succesfully", async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.elements.usernameInput().fill(constants.VALID_USERNAME);
        await loginPage.elements.passwordInput().fill(constants.VALID_PASSWORD);
        await loginPage.elements.loginButton().click();

        //await expect(loginPage.elements.errorMessage()).toHaveText("Invalid credentials");
    });

    test("Login with invalid credentials", async ({ page }) => {
        const loginPage = new LoginPage(page);              
        await loginPage.elements.usernameInput().fill(constants.INVALID_USERNAME);
        await loginPage.elements.passwordInput().fill(constants.INVALID_PASSWORD);
        await loginPage.elements.loginButton().click();
        await expect(loginPage.elements.errorMessage()).toBeVisible();
    });
});


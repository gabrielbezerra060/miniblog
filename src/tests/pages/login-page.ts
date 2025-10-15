import { Expect, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page        

    constructor(page: Page) {
        this.page = page;
    }

    static = {

    }

    elements = {
        usernameInput: () => this.page.locator('input[name="email"]'),
        passwordInput: () => this.page.locator('input[name="password"]'),
        loginButton: () => this.page.locator('button[type="submit"]'),
        errorMessage: () => this.page.locator('[data-testid="loginError"]'),
    }

    
}
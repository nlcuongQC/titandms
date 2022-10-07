import { Endpoints } from "../fixtures/globalConst"
import { Base } from "./BasePage"

class Login extends Base {
    private usernameTxtbx: string = "#user-name"
    private passwordTxtbx: string = "#password"
    private loginBtn: string = "#login-button"
    private errorTxt: string = "[data-test = 'error']"

    get userNameTxtbxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.usernameTxtbx)
    }

    get passwordTxtbxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.passwordTxtbx)
    }

    get loginBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginBtn)
    }

    get errorTxtElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.errorTxt)
    }

    typeUserName(username: string): void {
        this.userNameTxtbxElement.type(username)
    }

    typePassword(password: string): void {
        this.passwordTxtbxElement.type(password)
    }

    clickLoginBtn(): void {
        this.loginBtnElement.click()
    }

    visit(): void {
        cy.visit(Endpoints.LOGIN)
    }

    loginWith(username: string, password: string): void {
        this.typeUserName(username)
        this.typePassword(password)
        this.clickLoginBtn()
    }
}

export const LoginPage = new Login()
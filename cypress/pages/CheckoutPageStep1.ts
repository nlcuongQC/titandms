import { Value } from "../fixtures/globalConst";

class CheckoutStep1 {

    private firstNameTxtbx: string = `#first-name`
    private lastNameTxtbx: string = `#last-name`
    private zipcodeTxtbx: string = `#postal-code`
    private continueBtn: string = `#continue`
    private errorTxt: string = `[data-test = 'error']`

    get firstNameTxtbxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstNameTxtbx)
    }

    get lastNameTxtbxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.lastNameTxtbx)
    }

    get zipcodeTxtbxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.zipcodeTxtbx)
    }

    get continueBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.continueBtn)
    }

    get errorTxtElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.errorTxt)
    }

    inputCheckoutInfoWith(firstName: string, lastName: string, zipcode: string): void {
        this.firstNameTxtbxElement.type(firstName)
        this.lastNameTxtbxElement.type(lastName)
        this.zipcodeTxtbxElement.type(zipcode)
    }

    clickContinueBtn(): void {
        this.continueBtnElement.click()
    }

}

export const CheckoutPageStep1 = new CheckoutStep1()
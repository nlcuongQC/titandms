import { Base } from "./BasePage"

class Cart extends Base {
    
    private cartList: string = `.cart_list`
    private checkoutBtn: string = `#checkout`

    get cartListElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartList)
    }

    get checkoutBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkoutBtn)
    }

    inventoryNameElement(productName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.cartListElement.contains(productName)
    }

    removeBtnElement(productName: string): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return this.cartListElement.contains(productName).siblings().find(`button`)
    }

    clickRemoveBtnWithName(productName: string): void {
        this.removeBtnElement(productName).click()
    }

    clickCheckoutBtn(): void {
        this.checkoutBtnElement.click()
    }
}

export const CartPage = new Cart()
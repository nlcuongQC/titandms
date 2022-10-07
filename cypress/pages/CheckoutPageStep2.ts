class CheckoutStep2 {

    private cartList: string = `.cart_list`
    private finishBtn: string = `#finish`

    get cartListElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartList)
    }

    get finishBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.finishBtn)
    }

    inventoryNameElement(productName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.cartListElement.contains(productName)
    }

    clickFinishBtn(): void {
        this.finishBtnElement.click()
    }
}

export const CheckoutPageStep2 = new CheckoutStep2()
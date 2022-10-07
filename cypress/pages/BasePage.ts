import { Menu } from "../fixtures/globalConst"

class Base {
    private header: string = `.primary_header`
    private cartIcon: string = `#shopping_cart_container`
    private burgerMenu: string = `#react-burger-menu-btn`

    get headerElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.header)
    }

    get cartIconElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartIcon)
    }

    get burgerMenuElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.burgerMenu)
    }

    clickMenuName(menu: Menu) {
        cy.get(menu).click()
    }

    goToCartPage(): void {
        this.cartIconElement.click()
    }

    clickBurgerMenuBtn(): void {
        this.burgerMenuElement.click()
    }
}

export { Base }
import { Endpoints } from '../fixtures/globalConst'
import { Base } from './BasePage'

class Inventory extends Base { 

    private productTitles: string = `.inventory_item_label`
    
    get url(): Cypress.Chainable<string> {
        return cy.url()
    }

    get productTitlesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productTitles)
    }

    addToCartBtnWithProductNameElement(productName: string): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return this.productTitlesElement.contains(productName).parent(`div`).next()
    }

    clickAddToCartBtnWithProductName(productName: string): void {
        this.addToCartBtnWithProductNameElement(productName).click()
    }

    visit(): void {
        cy.visit(Endpoints.INVENTORY)
    }
}

export const InventoryPage = new Inventory()
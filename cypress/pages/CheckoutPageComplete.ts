class CheckoutComplete {
    private thankYouTitle: string = `.complete-header`
    private thankYouDesc: string = `.complete-text`

    get thankYouTitleElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.thankYouTitle)
    }

    get thankYouDescElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.thankYouDesc)
    }
}

export const CheckoutPageComplete = new CheckoutComplete()
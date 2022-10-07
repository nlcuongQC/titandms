import { CartPage } from "../pages/CartPage"
import { InventoryPage } from "../pages/InventoryPage"
import { LoginPage } from "../pages/LoginPage"
import { login, inventory, messages, checkout } from '../fixtures/data.json'
import { CheckoutPageStep1 } from "../pages/CheckoutPageStep1"
import { Asserts, Endpoints, Value } from "../fixtures/globalConst"
import { CheckoutPageStep2 } from "../pages/CheckoutPageStep2"
import { CheckoutPageComplete } from "../pages/CheckoutPageComplete"

describe('Checkout step 1 function', () => {

    const productName = inventory.productName

    beforeEach(() => {
        LoginPage.visit()
        LoginPage.loginWith(login.validUsername, login.password)
        InventoryPage.url.should(Asserts.CONTAIN, Endpoints.INVENTORY)
        InventoryPage.clickAddToCartBtnWithProductName(productName)
        InventoryPage.addToCartBtnWithProductNameElement(productName).should(Asserts.CONTAINS_TEXT, inventory.removeBtnTxt)
        InventoryPage.goToCartPage()
        CartPage.inventoryNameElement(productName).should(Asserts.VISIBLE)
        CartPage.clickCheckoutBtn()
    })

    it('Checkout with blank First Name', () => {
        CheckoutPageStep1.inputCheckoutInfoWith(Value.EMPTY, checkout.lastName, checkout.zip)
        CheckoutPageStep1.clickContinueBtn()
        CheckoutPageStep1.errorTxtElement.should(Asserts.CONTAINS_TEXT, messages.requiredFirstName)
    })

    it('Checkout with blank Last Name', () => {
        CheckoutPageStep1.inputCheckoutInfoWith(checkout.firstName, Value.EMPTY, checkout.zip)
        CheckoutPageStep1.clickContinueBtn()
        CheckoutPageStep1.errorTxtElement.should(Asserts.CONTAINS_TEXT, messages.requiredLastName)
    })

    it('Checkout with blank Zip code', () => {
        CheckoutPageStep1.inputCheckoutInfoWith(checkout.firstName, checkout.lastName, Value.EMPTY)
        CheckoutPageStep1.clickContinueBtn()
        CheckoutPageStep1.errorTxtElement.should(Asserts.CONTAINS_TEXT, messages.requiredZipCode)
    })

    it('Checkout with valid info', () => {
        CheckoutPageStep1.inputCheckoutInfoWith(checkout.firstName, checkout.lastName, checkout.zip)
        CheckoutPageStep1.clickContinueBtn()
        CheckoutPageStep2.inventoryNameElement(productName).should(Asserts.VISIBLE)
        CheckoutPageStep2.clickFinishBtn()
        CheckoutPageComplete.thankYouTitleElement.should(Asserts.CONTAINS_TEXT, messages.thankYouTitle)
        CheckoutPageComplete.thankYouDescElement.should(Asserts.CONTAINS_TEXT, messages.thankYouDesc)
    })
})
import { LoginPage } from "../pages/LoginPage"
import { login, inventory } from '../fixtures/data.json'
import { InventoryPage } from "../pages/InventoryPage"
import { CartPage } from "../pages/CartPage"
import { Asserts, Endpoints } from "../fixtures/globalConst"

describe('Add to cart function', () => {

    const productName = inventory.productName

    beforeEach(() => {
        LoginPage.visit()
        LoginPage.loginWith(login.validUsername, login.password)
        InventoryPage.url.should(Asserts.CONTAIN, Endpoints.INVENTORY)
    })

    it('Add to cart item', () => {
        InventoryPage.clickAddToCartBtnWithProductName(productName)
        InventoryPage.addToCartBtnWithProductNameElement(productName).should(Asserts.CONTAINS_TEXT, inventory.removeBtnTxt)
        InventoryPage.goToCartPage()
        CartPage.inventoryNameElement(productName).should(Asserts.VISIBLE)
    })

    it('Remove inventory from cart in inventory page', () => {
        InventoryPage.clickAddToCartBtnWithProductName(productName)
        InventoryPage.addToCartBtnWithProductNameElement(productName).should(Asserts.CONTAINS_TEXT, inventory.removeBtnTxt)
        InventoryPage.clickAddToCartBtnWithProductName(productName)
        InventoryPage.goToCartPage()
        CartPage.inventoryNameElement(productName).should(Asserts.NOT_EXIST)
    })

    it('Remove inventory from cart in inventory page', () => {
        InventoryPage.clickAddToCartBtnWithProductName(productName)
        InventoryPage.addToCartBtnWithProductNameElement(productName).should(Asserts.CONTAINS_TEXT, inventory.removeBtnTxt)
        InventoryPage.goToCartPage()
        CartPage.clickRemoveBtnWithName(productName)
        CartPage.inventoryNameElement(productName).should(Asserts.NOT_EXIST)
    })
})
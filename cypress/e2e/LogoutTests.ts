import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { login } from '../fixtures/data.json'
import { Asserts, Endpoints, Menu } from '../fixtures/globalConst'

describe('Logout function', () => {

    beforeEach('Open login page', () => {
        LoginPage.visit()
        LoginPage.loginWith(login.validUsername, login.password)
        InventoryPage.url.should(Asserts.CONTAIN, Endpoints.INVENTORY)
    })

    it('Logout', () => {
        InventoryPage.clickBurgerMenuBtn()
        InventoryPage.clickMenuName(Menu.LOGOUT)
        LoginPage.userNameTxtbxElement.should(Asserts.VISIBLE)
    })
})
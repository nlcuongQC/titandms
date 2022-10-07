import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { login, messages } from '../fixtures/data.json'
import { Asserts, Value } from '../fixtures/globalConst'

describe('Login function', () => {

    beforeEach('Open login page', () => {
        LoginPage.visit()
    })

    it('Login with valid account', () => {
        LoginPage.loginWith(login.validUsername, login.password)
        InventoryPage.url.should(Asserts.CONTAIN, '/inventory.html')
    })

    it('Login with blank username', () => {
        LoginPage.loginWith(Value.EMPTY, login.password)
        LoginPage.errorTxtElement.should(Asserts.CONTAINS_TEXT, messages.requiredUsername)
    })

    it('Login with blank password', () => {
        LoginPage.loginWith(login.validUsername, Value.EMPTY)
        LoginPage.errorTxtElement.should(Asserts.CONTAINS_TEXT, messages.requiredPassword)
    })

    it('Login with wrong password', () => {
        LoginPage.loginWith(login.validUsername, login.wrongPassword)
        LoginPage.errorTxtElement.should(Asserts.CONTAINS_TEXT, messages.wrongPassword)
    })
})
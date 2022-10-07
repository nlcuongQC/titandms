export enum Value {
    EMPTY = `{backspace}`
}

export enum Endpoints {
    INVENTORY = `/inventory.html`,
    LOGIN = `/`,
    CART = `/cart.html`
}

export enum Menu {
    ALL_ITEMS = `#inventory_sidebar_link`,
    ABOUT = `#about_sidebar_link`,
    LOGOUT = `#logout_sidebar_link`,
    RESET_APP_STATE = `#reset_sidebar_link`
}

export enum Asserts {
    CONTAINS_TEXT = 'contain.text',
    CONTAIN = 'contain',
    VISIBLE = 'be.visible',
    NOT_EXIST = 'not.exist'
}
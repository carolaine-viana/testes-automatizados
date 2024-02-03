const locators = {
  URL: {
    HOMEPAGE: 'https://magento2-demo.magebit.com/',
    MY_ACCOUNT: 'https://magento2-demo.magebit.com/customer/account/',
    LOGIN_PAGE: 'https://magento2-demo.magebit.com/customer/account/login/',
    SIGN_UP_PAGE: 'https://magento2-demo.magebit.com/customer/account/create/',
  },
  MENU: {
    select_my_orders: '.items > :nth-child(2) > a',
    detail_of_my_order: '.actions > .view > span',
  },
  login: {
    email: '#email',
    pass: '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass',
    BTN_LOGIN: '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
  },
  SIGN_UP: {
    name: '#firstname',
    lastname: '#lastname',
    email: '#email_address',
    password: '#password',
    password_confirm: '#password-confirmation',
    btn_sign_up: '#form-validate > .actions-toolbar > div.primary > .action'
  },
  ADD_CART: {
    start_shop: '.home-main > .content > .action',
    add_product: '#product-item-info_13 > .photo > .product-image-container > .product-image-wrapper > .product-image-photo',
    add_produt_watch: '#product-item-info_40 > .photo > .product-image-container > .product-image-wrapper > .product-image-photo',
    add_to_cart: '#product-addtocart-button',
    open_cart: '.showcart',
    search_product: '#search',
    click_to_search: 'button[class="action search"]',
    proceed_checkout: '#top-cart-btn-checkout'
  },
  ADDRESS: {
    street: 'div[class="control"] > input[name="street[0]"]',
    country: 'select[name="country_id"]',
    state: 'div[class="control"] > select[name="region_id"]',
    city: 'div[class="control"] > input[name="city"]',
    postcode: 'div[class="control"] > input[name="postcode"]',
    telephone: 'input[name="telephone"]',
    check: ':nth-child(1) > :nth-child(1) > .radio',
    btn_continue: 'button[data-role="opc-continue"]',
    btn_confirm: '.button > span',
    confirm_payment: '.payment-method-content > :nth-child(4) > div.primary > .action',
    text_confirm: 'span[data-ui-id="page-title-wrapper"]'
  }

}

export default locators;
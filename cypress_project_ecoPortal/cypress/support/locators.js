const locators = {
  URL: {
    HOMEPAGE: 'https://www.hoyts.co.nz',
  },
  MENU: {
    icon: 'button[aria-label="Menu"]',
    search: '.dash__search-input',
    select_movie: ':nth-child(1) > .dash__search-link > .dash__search-image',
  },
  login: {
    email: '.sign-in__fields > :nth-child(3) > .form-column > .form-placeholder > .form-placeholder__input',
    pass: ':nth-child(4) > .form-column > .form-placeholder > .form-placeholder__input',
    BTN_LOGIN: '.form-button',
  },
  SIGN_UP: {
    icon: '#header-profile > button',
    join_btn: '.sign-in__note > :nth-child(3)',
    email: ':nth-child(1) > .form-column > .form-placeholder > #form-placeholder__input--checkout-email',
    password: ':nth-child(4) > .form-column > .form-placeholder > .form-placeholder__input',
    name: '.sign-in__fields > :nth-child(5) > .form-column > .form-placeholder > .form-placeholder__input',
    lastname: '.sign-in__fields > :nth-child(6) > .form-column > .form-placeholder > .form-placeholder__input',
    mobile: ':nth-child(7) > .form-column > .form-placeholder > .form-placeholder__input',
    post_code: '#form-placeholder__input--sign-in-post-code',
    datebirth:'#form-placeholder__input--sign-in-date-of-birth',
    gender: '#form-radio__input--sign-in-female',
    preferred_cinema: '#form-placeholder__select--preferredCinema',
    check_box: '#form-checkbox__input--sign-in-terms',
    btn_sign_up: ':nth-child(12) > .form-button',
    select_membership: ':nth-child(1) > .sign-in__membership-radio > .sign-in__membership-label',
    confirm_signup: ':nth-child(6) > .form-button',
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
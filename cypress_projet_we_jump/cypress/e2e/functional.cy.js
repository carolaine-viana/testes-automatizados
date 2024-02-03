/// <reference types="cypress" />
import loc from "../support/locators";
import { faker } from '@faker-js/faker';

//const email = faker.internet.email()

const my_profile = {
    name: faker.internet.name,
    lastname:faker.internet.lastname,
    email: faker.internet.email(),
    password: 'Pas@w0rd'
}

describe('Testes Funcionais', () => {
    beforeEach(() => {
        cy.visit("https://magento2-demo.magebit.com/", { failOnStatusCode: false })
    })

    it("Cadastro de usuário", () => {
        cy.get(loc.SIGN_UP.sign_up).first().click({ force: true })
        cy.get(loc.SIGN_UP.name).type(`${my_profile.name}`)
        cy.get(loc.SIGN_UP.lastname).type(`${my_profile.lastname}`)

        cy.get(loc.SIGN_UP.email).type(`${my_profile.email}`)
        cy.get(loc.SIGN_UP.password).type(`${my_profile.password}`)
        cy.get(loc.SIGN_UP.password_confirm).type(`${my_profile.password}`)

        cy.get(loc.SIGN_UP.btn_sign_up).click({ force: true })
    });

    it("Realizar Login", () => {
        cy.login(`${my_profile.email}`, `${my_profile.password}`)
    });

    it("Adicionar produto ao carrinho + Finalização de compra", () => {
        cy.login(`${my_profile.email}`, `${my_profile.password}`)

        cy.get(loc.ADD_CART.start_shop).click({ force: true })
        cy.get(loc.ADD_CART.add_product).click({ force: true })
        cy.wait(3000)
        cy.get(loc.ADD_CART.add_to_cart).click({ force: true })
        cy.wait(3000)
        cy.get(loc.ADD_CART.open_cart).click({ force: true })
        cy.get(loc.ADD_CART.proceed_checkout).click({ force: true })
        cy.wait(3000)
        cy.get(loc.ADDRESS.street).type('rua abc')
        cy.get(loc.ADDRESS.country).select('Brazil')
        cy.get(loc.ADDRESS.state).select('Espírito Santo')
        cy.get(loc.ADDRESS.city).type('Teste')
        cy.get(loc.ADDRESS.postcode).type('20093')
        cy.get(loc.ADDRESS.telephone).type('27-995086910')

        cy.get(loc.ADDRESS.check).click({ force: true })
        cy.wait(2000)
        cy.get(loc.ADDRESS.btn_continue).click({ force: true })
        cy.wait(2000)
        cy.get('.button').click({ force: true })
        cy.wait(2000)
        cy.get(loc.ADDRESS.confirm_payment).click({ force: true })

        cy.wait(3000)
        cy.get(loc.ADDRESS.text_confirm)
            .invoke("text")
            .then((x) => {
                expect(x).to.eq("Thank you for your purchase!")
            })
    });

    it("Adicionar produto ao carrinho em fluxos alternativo - Página de produto + busca", () => {
        cy.login(`${my_profile.email}`, `${my_profile.password}`)

        cy.get(loc.ADD_CART.start_shop).click({ force: true })

        cy.get(loc.ADD_CART.search_product).type('Watch')
        cy.get('div[id="search_autocomplete"]').click({ force: true })
        cy.get('#qs-option-0').click({ force: true })

        cy.get(loc.ADD_CART.add_produt_watch).click({ force: true })
        cy.wait(3000)
        cy.get(loc.ADD_CART.add_to_cart).click({ force: true })
    });

    it("Adicionar produto ao carrinho em fluxos alternativo - Lista + detalhes", () => {
        cy.login(`${my_profile.email}`, `${my_profile.password}`)

        cy.get(loc.MENU.acess_my_account).click({ force: true })
        cy.get(loc.MENU.view_my_account).click({ force: true })
        cy.get(loc.MENU.view_my_account).click({ force: true })
        cy.get(loc.MENU.detail_of_my_order).click({ force: true })
    });
})

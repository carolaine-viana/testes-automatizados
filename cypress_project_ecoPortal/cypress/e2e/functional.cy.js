/// <reference types="cypress" />

import loc from "../support/locators";
import { faker } from '@faker-js/faker';

const my_profile = {
    name: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    mobile: '5527995086912',
    zip: '29146070',
    bday: '1997-04-08'
}

describe('Functional Test', () => {
    beforeEach(() => {
        cy.visit(loc.URL.HOMEPAGE)
    })

    it("SIGN UP", { retries: 1 }, () => {
        cy.wait(3000)
        cy.get(loc.SIGN_UP.icon).click({force: true})
        cy.wait(1000)
        cy.get(loc.SIGN_UP.join_btn).should('be.visible').click({force: true})

        cy.get(loc.SIGN_UP.email).should('be.visible').type(`${my_profile.email}`, {delay: 50})
        cy.get(loc.SIGN_UP.password).should('be.visible').type(`${my_profile.password}`, {delay: 50})

        cy.get(loc.SIGN_UP.name).should('be.visible').type(`${my_profile.name}`, {delay: 50})
        cy.get(loc.SIGN_UP.lastname).should('be.visible').type(`${my_profile.lastname}`, {delay: 50})
        cy.get(loc.SIGN_UP.mobile).should('be.visible').type(`${my_profile.mobile}`, {delay: 50})
        cy.get(loc.SIGN_UP.post_code).should('be.visible').type(`${my_profile.zip}`, {delay: 50})
        cy.get(loc.SIGN_UP.datebirth).should('be.visible').type(`${my_profile.bday}`, {delay: 50})
        cy.get(loc.SIGN_UP.gender).click({force: true})
        cy.get(loc.SIGN_UP.preferred_cinema).select('Berkeley Mission Bay').should('have.value', '1013')
        cy.get(loc.SIGN_UP.check_box).click({force: true})
        cy.get(loc.SIGN_UP.btn_sign_up).click({ force: true })
        cy.get(loc.SIGN_UP.select_membership).click({ force: true })
        cy.get(loc.SIGN_UP.confirm_signup).click({ force: true })
    });

    it("LOGIN", () => {
        cy.wait(3000)
        cy.get(loc.SIGN_UP.icon).click({force: true})
        cy.wait(1000)
        cy.login(`carolsantos14@hotmail.com`, `carolaine123`)
    });

    it("SEARCH FOR MOVIE", () => {
        cy.wait(3000)
        cy.get(loc.MENU.icon).click({force: true}),
        cy.get(loc.MENU.search).type('Duna'),
        cy.wait(3000)
        cy.get(loc.MENU.select_movie).click({force: true})
    });
})

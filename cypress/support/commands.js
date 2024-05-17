// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("CreateUser", (name, lastname, email) => {
    cy.get('#user_name').type(name)
    cy.get('#user_lastname').type(lastname)
    cy.get('#user_email').type(email)

    cy.get('.actions').click()
})

Cypress.Commands.add("CreateFullUser", (name, lastname, email, address, university, profile, gender, age) => {
    cy.get('#user_name').type(name)
    cy.get('#user_lastname').type(lastname)
    cy.get('#user_email').type(email)
    cy.get('#user_address').type(address)
    cy.get('#user_university').type(university)
    cy.get('#user_profile').type(profile)
    cy.get('#user_gender').type(gender)
    cy.get('#user_age').type(age)
    cy.get('.actions').click()
})


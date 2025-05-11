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
Cypress.Commands.add('createCategory', (categoryBody) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8080/api/category',
        failOnStatusCode: false,
        body: categoryBody
    });
});

Cypress.Commands.add('createClient', (clientBody) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8080/api/client',
        failOnStatusCode: false,
        body: clientBody
    });
});

Cypress.Commands.add('createProduct', (productBody) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8080/api/product',
        failOnStatusCode: false,
        body: productBody
    });
})



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
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import Chainable = Cypress.Chainable;

declare namespace Cypress {
    interface Chainable<Subject> {
        tagContainsValue(element: Chainable, value: string): Chainable<JQuery>
        clickLink(label: string): void
        typeById(id: string, value: string): void
    }
}

Cypress.Commands.add('tagContainsValue', (tag, value): Chainable => {
    return tag.contains(value)
})
Cypress.Commands.add('tagContainsValue', (tag, value): Chainable => {
    return tag.contains(value)
})

Cypress.Commands.add('typeById', (id, value) => {
    cy.get(id).type(value)
})

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})


/// <reference types="Cypress" /> 

describe("Premier test: test formilaire", () => {

    // Tuto: https://www.valentinog.com/blog/cypress/

    before(() => {
        cy.visit("https://jobcomoco.netlify.app/");
    })

    
    it("User can open and close form modal", () => {
        cy.get(":nth-child(2) > .apply-btn > .btn")
        .click();
        cy.get("#myModal").should("be.visible");

        cy.get('.modal-footer > .btn').click();
        cy.get("#myModal").should("not.be.visible");

    });

})
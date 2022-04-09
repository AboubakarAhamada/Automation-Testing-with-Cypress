
/// <reference types="Cypress" /> 


import HomePage from "../../page_object/HomePage";
import FormModal from "../../page_object/FormModal";

describe("Test de la page d'acceuil du site jobcomoco", () => {

    beforeEach(() => {
        cy.visit("https://jobcomoco.netlify.app/");
    })

    
    it("Open and close modal", () => {
        HomePage.getOpenModalBtn().click();
        FormModal.getModal().should('be.visible');
        FormModal.getCloseModalBtn().click();
        FormModal.getModal().should('not.be.visible');

    });

    it("Applying with all empties filedies", () => {
        HomePage.getOpenModalBtn().click();
        FormModal.getSubmitBtn().click(); 
        // In this cas first filed should be focused
        cy.get("#nom").should('be.focused');  
    })
  
    it("Apply with empty fields fileds : empty lastname", () =>{
        let user = {
            firstName : "Aboubakar",
            lastName : "Ahmada",
            email: "abou.ahamada269@gmail.com",
            phoneNumber: "+212607000000",

        }

        HomePage.getOpenModalBtn().click();
        FormModal.enterFirstName(user.firstName);
        FormModal.enterPhoneNumber(user.phoneNumber);
        FormModal.enterEmail(user.email);
        FormModal.getSubmitBtn().click();
        // Then lastname field should be focused
        cy.get("#prenom").should('be.focused');   
    })

    it("Sumbit with invalid email", () => {
        let user = {
            firstName : "Aboubakar",
            lastName : "Ahmada",
            email: "abou.ahamada269gmail.com",
            phoneNumber: "+212607000000",

        }

        HomePage.getOpenModalBtn().click();
        FormModal.enterFirstName(user.firstName);
        FormModal.enterLastName(user.lastName);
        FormModal.enterPhoneNumber(user.phoneNumber);
        FormModal.enterEmail(user.email);
        FormModal.getSubmitBtn().click();
        // In this cas email field should be focused
        cy.get("#mail").should('be.focused');
    })

    it("Sumbit with invalid phone number", () => {
        let user = {
            firstName : "Aboubakar",
            lastName : "Ahmada",
            email: "abou.ahamada269@gmail.com",
            phoneNumber: "658xr25",

        }

        HomePage.getOpenModalBtn().click();
        FormModal.enterFirstName(user.firstName);
        FormModal.enterLastName(user.lastName);
        FormModal.enterPhoneNumber(user.phoneNumber);
        FormModal.enterEmail(user.email);
        FormModal.getSubmitBtn().click();
        cy.get("#phone").should('be.focused');
    })
})

/// <reference types="Cypress" /> 


import HomePage from "../../page_object/HomePage";
import FormModal from "../../page_object/FormModal";

describe("Test de la page d'acceuil du site jobcomoco", () => {

    let userData = {
        firstName : "Aboubakar",
        lastName : "Ahmada",
        email: "abou.ahamada269@gmail.com",
        phoneNumber: "+212607000000",
        resumeePath : "cypress/fixtures/CV_AboubakarAhamada.pdf"
    }

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
        FormModal.getFirstNameInput().should('be.focused');  
    })
  
    it("Apply with one empty field : empty lastname", () =>{
       
        HomePage.getOpenModalBtn().click();
        FormModal.enterFirstName(userData.firstName);
        FormModal.enterEmail(userData.email);
        FormModal.enterPhoneNumber(userData.phoneNumber);
        FormModal.uploadResumee(userData.resumeePath)

        FormModal.getSubmitBtn().click();
        // Then lastname field should be focused
        FormModal.getLastNameInput().should('be.focused');   
    })


    it("Sumbit with invalid phone number", () => {

        userData.phoneNumber = "325xya+9$";

        HomePage.getOpenModalBtn().click();
        FormModal.enterFirstName(userData.firstName);
        FormModal.enterLastName(userData.lastName);
        FormModal.enterEmail(userData.email);
        FormModal.enterPhoneNumber(userData.phoneNumber);
        FormModal.uploadResumee(userData.resumeePath);

        FormModal.getSubmitBtn().click();
        FormModal.getPhoneNumberInput().should('be.focused');
    })

    it("Sumbit with invalid email", () => {

        userData.email = "abou.ahamada@";

        HomePage.getOpenModalBtn().click();
        FormModal.enterFirstName(userData.firstName);
        FormModal.enterLastName(userData.lastName);
        FormModal.enterEmail(userData.email);
        FormModal.enterPhoneNumber(userData.phoneNumber);
        FormModal.uploadResumee(userData.resumeePath);

        FormModal.getSubmitBtn().click();
        // In this cas email field should be focused
        FormModal.getEmailInput().should('be.focused');
    })

    
    it("Submit with correct and complate data", () => {

        userData.email = "abou.ahamada269@gmail.com";

        HomePage.getOpenModalBtn().click();
        FormModal.enterFirstName(userData.firstName);
        FormModal.enterLastName(userData.lastName);
        FormModal.enterEmail(userData.email);
        FormModal.enterPhoneNumber(userData.phoneNumber);
        FormModal.getSubmitBtn().click();
        FormModal.uploadResumee(userData.resumeePath);
        FormModal.getSubmitBtn().click();

        // Because we don't have backend to handle data submited
        // we should have error message displayed
        cy.get('.card')
        .should('be.visible')
        .and('contain', 'Page Not Found');
    })
})
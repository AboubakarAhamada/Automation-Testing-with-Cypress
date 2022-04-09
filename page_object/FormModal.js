export default class FormModal {
    static getModal = () =>{
        return cy.get("#myModal");
    }
    static getSubmitBtn = () =>{
        return cy.get('form > .btn');
    }

    static getCloseModalBtn = () =>{
        return cy.get('.modal-footer > .btn');
    }

    static getFirstNameInput = () => {
        return cy.get("#nom");
    }
    static getLastNameInput = () => {
        return cy.get("#prenom");
    }

    static getEmailInput = () => {
        return cy.get("#mail");
    }

    static getPhoneNumberInput = () => {
        return cy.get("#phone");
    }

    static enterFirstName = usernam => {
        cy.get("#nom")
        .clear()
        .type(usernam);
    }
    static enterLastName = lastName => {
        cy.get("#prenom")
        .clear()
        .type(lastName);
    }
    static enterEmail = email => {
        cy.get("#mail")
        .clear()
        .type(email);
    }
    static enterPhoneNumber(phoneNumber){
        cy.get("#phone")
        .clear()
        .type(phoneNumber);
    }

    static uploadResumee(path){
        cy.get('#cv_path')
        .selectFile(path);
    }
}
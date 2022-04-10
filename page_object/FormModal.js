export default class FormModal {
    static get getModal(){
        return cy.get("#myModal");
    }
    static get  getSubmitBtn(){
        return cy.get('form > .btn');
    }

    static get getCloseModalBtn(){
        return cy.get('.modal-footer > .btn');
    }

    static get getFirstNameInput(){
        return cy.get("#nom");
    }
    static get getLastNameInput(){
        return cy.get("#prenom");
    }

    static get getEmailInput(){
        return cy.get("#mail");
    }

    static get getPhoneNumberInput(){
        return cy.get("#phone");
    }

    static enterFirstName(usernam){
        cy.get("#nom")
        .clear()
        .type(usernam);
    }
    static enterLastName(lastName){
        cy.get("#prenom")
        .clear()
        .type(lastName);
    }
    static enterEmail(email){
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
export default class FormModal {
    static getModal(){
        return cy.get("#myModal");
    }
    static getSubmitBtn(){
        return cy.get('form > .btn');
    }

    static getCloseModalBtn(){
        return cy.get('.modal-footer > .btn');
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
        
    }
}
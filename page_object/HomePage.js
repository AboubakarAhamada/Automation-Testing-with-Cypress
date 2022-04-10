export default class HomePage {

    static get getOpenModalBtn(){
        return cy.get(':nth-child(2) > .apply-btn > .btn');
    }
   
} 
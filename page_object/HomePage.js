export default class HomePage {

    static getOpenModalBtn(){
        return cy.get(':nth-child(2) > .apply-btn > .btn');
    }
   
} 
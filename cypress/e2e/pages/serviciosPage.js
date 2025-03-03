class serviciosPage{
    elements = {
        // username : ()  =>  cy.get("#username"),
        // password : ()  => cy.get("#password"),
        // clickLogin : () => cy.get('#kc-form-buttons'),
        // btnTramites : () => cy.get('.step6 > a'),
        btnServicios : () => cy.get('.step5 > a'),
        // btnPagos : () => cy.get('.step4 > a'),
        textTittle : () => cy.get('h1'),
        // textInconrrectCredentials : () => cy.get('#input-error')
    }

    clickServicios(){
        this.elements.btnServicios().click();
    }
}

export default new serviciosPage();
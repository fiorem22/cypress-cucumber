class loginPage{
    elements = {
        username : ()  =>  cy.get("#username"),
        password : ()  => cy.get("#password"),
        clickLogin : () => cy.get('#kc-form-buttons'),
        btnTramites : () => cy.get('.step6 > a'),
        btnServicios : () => cy.get('.step5 > a'),
        btnPagos : () => cy.get('.step4 > a'),
        textTittle : () => cy.get('h1'),
        textInconrrectCredentials : () => cy.get('#input-error')
    }
    loginCredentials(username, password){
        this.elements.username().should('exist').should('be.visible').should('be.enabled').focus().type(username);
        this.elements.password().should('be.visible').should('be.enabled').focus().type(password);
    }

    typeUsername(username){
        this.elements.username().should('exist').should('be.visible').should('be.enabled').focus().type(username);
    }

    typePassword(password){
        this.elements.password().should('be.visible').should('be.enabled').focus().type(password);
    }

    btnclickLogin(){
        this.elements.clickLogin().click();
    }

    clickTramites(){
        this.elements.btnTramites().click();
    }

    clickServicios(){
        this.elements.btnServicios().click();
    }

    clickPagos(){
        this.elements.btnPagos().click();
    }
}

export default new loginPage();
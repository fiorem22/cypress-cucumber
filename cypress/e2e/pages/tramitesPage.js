require('cypress-xpath');

class tramitesPage{
    elements = {
        // username : ()  =>  cy.get("#username"),
        // password : ()  => cy.get("#password"),
        // clickLogin : () => cy.get('#kc-form-buttons'),
        btnTramites : () => cy.get('.step6 > a'),
        // btnServicios : () => cy.get('.step5 > a'),
        // btnPagos : () => cy.get('.step4 > a'),
        textTittle : () => cy.get('h1'),
        // textInconrrectCredentials : () => cy.get('#input-error')
        optionSolicitudesSae : () => cy.get('[tabindex="4"]'),
        dropDownTipo : () => cy.xpath(`//*[@id="root"]/div[2]/div/div[2]/div/div/div[2]/div[1]/div[2]/div/div/button`),
        // banner : () => cy.get('[data-testid="cmp-header-wrapper"]'),
        optionAmpliacion : () => cy.get('.menu-container > :nth-child(1) > [data-testid="cmp-check-handler-block"]'),
        inputNumberInfo : () => cy.get('[data-testid="cmp-input-register-ticket"]'),
        inputTextDetalle : () => cy.get('[data-testid="cmp-textarea-field-register-ticket"]'),
        checkBox : () => cy.get('[style="display: flex; flex-direction: row;"] > :nth-child(1)'),
        btnSolicitar : () => cy.get('[data-testid="cc-button__element"]'),
        btnEntendido : () => cy.get('[data-testid="cmp-success-message-primary-button"]'),
        btnAtras: () => cy.get('[data-testid="cmp-buttom-back-refactor"] > img'),
        tittleOptionAutogestionable: () => cy.get('[tabindex="3"] > div > h3'),
        tittleOptionSolicitudSae: () => cy.get('[tabindex="4"] > div > h3'),
        tittleOptionBecas: () => cy.get('[tabindex="5"] > div > h3')
    }


    clickTramites(){
        this.elements.btnTramites().click();
    }

    clickOptionSolicitudesSae(){
        this.elements.optionSolicitudesSae().click();
    }

    clickDropDownTipo(){
        this.elements.dropDownTipo().should('exist').should('be.visible').should('be.enabled').focus().wait(5000).click({ force: true });
    }

    clickOptionAmpliacion(){
        this.elements.optionAmpliacion().should('exist').should('be.visible').focus().wait(5000).click({ force: true });
    }

    typeInputNumberInfo(number){
        this.elements.inputNumberInfo().should('exist').should('be.visible').should('be.enabled').focus().type(number);
    }

    typeInputTextDetalle(message){
        this.elements.inputTextDetalle().should('exist').should('be.visible').should('be.enabled').focus().type(message);
    }

    clickCheckBox(){
        this.elements.checkBox().click();
    }

    clickBtnSolicitar(){
        this.elements.btnSolicitar().click();
    }

    clickBtnEntendido(){
        this.elements.btnEntendido().click();
    }

    clickBtnAtras(){
        this.elements.btnAtras().click();
    }




}

export default new tramitesPage();
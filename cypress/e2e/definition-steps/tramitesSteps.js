const{Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
import loginPage from "../pages/loginPage"
import tramitesPage from "../pages/tramitesPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve falso para evitar que Cypress falle la prueba
    return false;
});

// Given("the user is on the login pages", () => {
//         cy.visit("/");
//       });

// When("the user enters the username {string}, the user enters the password {string}", (user, password) => {
//     loginPage.loginCredentials(user, password)
// });

When("the user be on principal page", (username, password) => {
    cy.visit("/");
    loginPage.loginCredentials('U24220181@', '1234')
    loginPage.btnclickLogin()
    // try{
    //     loginPage.btnclickLogin()
    // }catch(error){
    //     cy.log('login'+error)
    // }
});

Given("the user be on page Tramites", (username, password) => {
    cy.visit("/");
    loginPage.loginCredentials('U24220181@', '1234')
    loginPage.btnclickLogin()
    tramitesPage.clickTramites()
    // tramitesPage.clickOptionSolicitudesSae()
    // tramitesPage.clickDropDownTipo()
    // cy.wait(5000)
    // tramitesPage.clickOptionAmpliacion()
    // tramitesPage.typeInputNumberInfo('957124512')
    // tramitesPage.typeInputTextDetalle('informacion')
    // try{
    //     loginPage.btnclickLogin()
    // }catch(error){
    //     cy.log('login'+error)
    // }
});

When("clicks the Solicitudes SAE button", () => {
    tramitesPage.clickOptionSolicitudesSae()
    // try{
    //     loginPage.btnclickLogin()
    // }catch(error){
    //     cy.log('login'+error)
    // }
});

When("clicks dropdown Tipo", () => {
    tramitesPage.clickDropDownTipo()
    // try{
    //     tramitesPage.clickDropDownTipo()
    // }catch(error){
    //     cy.log('login'+error)
    // }
    tramitesPage.clickOptionAmpliacion()
    // cy.wait(10000)
    // try{
    //     tramitesPage.clickOptionAmpliacion()
    // }catch(error){
    //     cy.log('login'+error)
    // }
});

When("clicks the tramites button", () => {
    tramitesPage.clickTramites()
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
});

When("type on Información de contacto {string}", (number) => {
    tramitesPage.typeInputNumberInfo(number)
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
});

When("type on Detalle de solicitud {string}", (message) => {
    tramitesPage.typeInputTextDetalle(message)
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
});

When("clicks the Solicitar button", () => {
    tramitesPage.clickBtnSolicitar()
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
});

When("clicks the Entiendo button", () => {
    tramitesPage.clickBtnEntendido()
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
});

When("the user click the Atras button", () => {
    tramitesPage.clickBtnAtras()
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
});

When("the user clicks the Solicitudes SAE button", () => {
    tramitesPage.clickOptionSolicitudesSae()
    // try{
    //     loginPage.btnclickLogin()
    // }catch(error){
    //     cy.log('login'+error)
    // }
});

Then("should to show the message {string} tramites", (message) => {
    tramitesPage.elements.textTittle().should('have.text',message);
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
});

// When("clicks check", () => {
    // tramitesPage.clickCheckBox()
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
// });

// Then("should to show the message {string} tramites", (message) => {
//     loginPage.elements.textTittle().should('have.text',message);
// });

// Then("should to show the url {string}", (message) => {
//     cy.url().should('have.text',message)
// });

// Then("should to show the message blocked {string}", (message) => {
//     loginPage.elements.blockedMessage().should('have.text',message);
// });

// When("should to show the message incorrect user {string}", (message) => {
//     loginPage.elements.blockedMessage().should('have.text', message);
// });
     
// Given("the user is on the login page", () => {
//     cy.visit("/");
// });

// When("the user enters the usernmae {string}", (user) => {
//     loginPage.writeUser(user);
// });

// When("the user enters the password {string}", (password) => {
//     loginPage.writePassword(password);
// });

// When("clicks the {string} button", () => {
//     loginPage.btnclickLogin();
// });
   
// Then("should to show the inventory page", () => {
//     cy.url().should('contains', '/inventory.html');
// });

// Then("should to show the message blocked {string}", (message) => {
//     loginPage.elements.blockedMessage().should('have.text',message);
// });

// When("should to show the message incorrect user {string}", (message) => {
//     loginPage.elements.blockedMessage().should('have.text', message);
// });
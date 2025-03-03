const{Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
import loginPage from "../pages/loginPage";
import serviciosPage from "../pages/serviciosPage";

When("the user be on principal page to go servicios", (username, password) => {
    cy.visit("/");
    loginPage.loginCredentials('U24220181@', '1234')
    try{
        loginPage.btnclickLogin()
    }catch(error){
        cy.log('login'+error)
    }
});

When("clicks the servicios button", () => {
    serviciosPage.clickServicios()
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
});

Then("should to show the message {string} servicios", (message) => {
    loginPage.elements.textTittle().should('have.text',message);
});
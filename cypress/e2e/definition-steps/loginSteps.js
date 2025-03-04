const{Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
import loginPage from "../pages/loginPage"

Given("the user is on the login page", () => {
        cy.visit("/");
      });

When("the user enters the username {string}, the user enters the password {string}", (username, password) => {
    loginPage.loginCredentials(username, password)
});

When("the user clicks the login button", () => {
    // cy.wrap(loginPage.btnclickLogin(button))
    // .catch((error)=> {
    //     console.error('login', error);
    //     return Cypress.Promise.resolve()
    // });
    loginPage.btnclickLogin()
    // try{
    //     loginPage.btnclickLogin()
    // }catch(error){
    //     cy.log('login'+error)
    // }
});

Then("should to show the url {string}", (url) => {
    cy.url().should('eq',url)
});

When("clicks the pagos button", () => {
    loginPage.clickPagos()
    // try{
    //     loginPage.clickTramites()
    // }catch(error){
    //     cy.log('Tramites'+error)
    // }
});

// Then("should to show the message {string}", (message) => {
//     loginPage.elements.textTittle().should('have.text',message);
// });

When("the user enters incorrect credentials", (dataTable) => {
    dataTable.hashes().forEach(row => {
        loginPage.typeUsername(row.username)
        loginPage.typePassword(row.password)
    });
});

When("the user enters incorrect credentials {string} y {string}", (username,password) => {
    // dataTable.hashes().forEach(row => {
        loginPage.typeUsername(username)
        loginPage.typePassword(password)
    // });
});

Then("should to show the failure message {string}", (message) => {
    loginPage.elements.textInconrrectCredentials().should('have.text',message);
});

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
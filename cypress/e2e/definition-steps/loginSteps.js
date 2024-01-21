const{Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
import loginPage from "../pages/loginPage"


Given("the user is on the login page", () => {
        cy.visit("/");
      }); 

When("the user enters the usernmae {string}, the user enters the password {string}, clicks the {string} button", (user, password) => {
    loginPage.loginCredentials(user, password)
});

Then("should to show the inventory page", () => {
    cy.url().should('contains', '/inventory.html');
});

Then("should to show the message blocked {string}", (message) => {
    loginPage.elements.blockedMessage().should('have.text',message);
});

When("should to show the message incorrect user {string}", (message) => {
    loginPage.elements.blockedMessage().should('have.text', message);
});
     
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
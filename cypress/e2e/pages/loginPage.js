class loginPage{
    elements = {
        username : ()  =>  cy.get("#user-name"),
        password : ()  => cy.get("#password"),
        clickLogin : () => cy.get("#login-button"),
        blockedMessage : () => cy.get('[data-test="error"]')                              
       
    }
    loginCredentials(user, password){
        this.elements.username().type(user);
        this.elements.password().type(password);
        this.elements.clickLogin().click()
    }

    // writeUser(user){
    //     this.elements.username().type(user);
    // }

    // writePassword(password){
    //     this.elements.password().type(password);
    // }

    // btnclickLogin(){
    //     this.elements.clickLogin().click();
    // }
    
}

export default new loginPage();
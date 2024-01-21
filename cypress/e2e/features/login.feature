Feature: Login to the application
    Background:
    Given the user is on the login page

Scenario: Succesful login
    When the user enters the usernmae "standard_user", the user enters the password "secret_sauce", clicks the "login" button
    Then should to show the inventory page

Scenario: Blocked user
    When the user enters the usernmae "locked_out_user", the user enters the password "secret_sauce", clicks the "login" button
    Then should to show the message blocked "Epic sadface: Sorry, this user has been locked out." 

Scenario: UnSuccesful login
    When the user enters the usernmae "test", the user enters the password "secret_sauce", clicks the "login" button
    Then should to show the message incorrect user "Epic sadface: Username and password do not match any user in this service"
    
# Feature: Login to the application
#     Background:
#     Given the user is on the login page

# Scenario: Succesful login
#     When the user enters the usernmae "standard_user"
#     And the user enters the password "secret_sauce"
#     And clicks the "login" button
#     Then should to show the inventory page
    
# Scenario: Blocked user
#     When the user enters the usernmae "locked_out_user"
#     And the user enters the password "secret_sauce"
#     And clicks the "login" button
#     Then should to show the message blocked "Epic sadface: Sorry, this user has been locked out." 
    
# Scenario: UnSuccesful login
#     When the user enters the usernmae "test"
#     And the user enters the password "secret_sauce"
#     And clicks the "login" button
#     Then should to show the message incorrect user "Epic sadface: Username and password do not match any user in this service"
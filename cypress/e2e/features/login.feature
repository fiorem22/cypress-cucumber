Feature: Login to the application
    Background:
    Given the user is on the login page

@skip
Scenario: Succesful Login
    When the user enters the username "U24220181@", the user enters the password "1234"
    When the user clicks the login button
    Then should to show the url "https://dpyafdt5ufpo0.cloudfront.net/inicio/#iss=https%3A%2F%2Fsso-qa.utp.edu.pe%2Fauth%2Frealms%2FXpedition-qa"

# @skip
# Scenario: Succesful Tramites
#     When the user enters the username "U24220181@", the user enters the password "1234"
#     When clicks the login button
#     When clicks the tramites button
#     Then should to show the message "Trámites"

# Scenario: Succesful Servicios
#     When the user enters the username "U24220181@", the user enters the password "1234"
#     When clicks the login button
#     When clicks the servicios button
#     Then should to show the message "Servicios"

# Scenario: Succesful Pagos
#     When the user enters the username "U24220181@", the user enters the password "1234"
#     When clicks the login button
#     When clicks the pagos button
#     Then should to show the message "Pagos"

# @skip
Scenario: Incorrect Username Login
    When the user enters incorrect credentials '<username>' y '<password>'
    When the user clicks the login button
    Then should to show the failure message "Correo y/o contraseña incorrectos"
    Examples:
    |username|password|
    |username1|password1|
    |username2|password2|



# Scenario: Blocked user
#     When the user enters the usernmae "locked_out_user", the user enters the password "secret_sauce", clicks the "login" button
#     Then should to show the message blocked "Epic sadface: Sorry, this user has been locked out." 

# Scenario: UnSuccesful login
#     When the user enters the usernmae "test", the user enters the password "secret_sauce", clicks the "login" button
#     Then should to show the message incorrect user "Epic sadface: Username and password do not match any user in this service"
    
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
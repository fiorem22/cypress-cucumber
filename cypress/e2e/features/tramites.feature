Feature: Login to the application
    Background:
    Given the user be on page Tramites

# @skip
Scenario: Succesful Tramites
    # When the user be on principal page
    # When clicks the tramites button
    Then should to show the message "Trámites" tramites

# @skip
Scenario: Succesful Options Tramites
    # When the user be on page Tramites
    When clicks the Solicitudes SAE button
    When clicks dropdown Tipo
    When type on Información de contacto "957124512"
    When type on Detalle de solicitud "informacion"
    When clicks the Solicitar button
    When clicks the Entiendo button
    Then should to show the message "Trámites" tramites

Scenario: Succesful Options Tramites
    When the user clicks the Solicitudes SAE button
    When the user click the Atras button
    Then should to show the message "Trámites" tramites

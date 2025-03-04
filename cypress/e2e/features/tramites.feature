Feature: Login to the application
    Background:
    Given the user be on page Tramites

@skip
Scenario: Succesful Tramites
    # When the user be on principal page
    # When clicks the tramites button
    Then should to show the message "Trámites" tramites

@skip
Scenario: Succesful flow Options Solicitudes SAE
    # When the user be on page Tramites
    When the user clicks the Solicitudes SAE button
    When the user clicks dropdown Tipo
    When the user type on Información de contacto "957124512"
    When the user type on Detalle de solicitud "informacion"
    When the user clicks the Solicitar button
    When the user clicks the Entiendo button
    Then should to show the message "Trámites" tramites

Scenario: Succesful Options Tramites
     When the user be on page Tramites
    When clicks the Solicitudes SAE button
    When clicks dropdown Tipo
    When types '<informacion>' y '<detalle>'
    Examples:
    |informacion|detalle|
    |951427452|i|
    |951427457|u|
    # When Detalle de solicitud
    When clicks the Solicitar button
    When clicks the Entiendo button
    Then should to show the message "Trámites" tramites

@skip
Scenario: Succesful back Tramites
    When the user clicks the Solicitudes SAE button
    When the user click the Atras button
    Then should to show the message "Trámites" tramites

@skip
Scenario: Succesful number Options Tramites
    Then should to show "Autogestionables", "Solicitudes SAE" y "Becas"

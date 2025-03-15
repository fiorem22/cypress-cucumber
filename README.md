# Portal UTP

## Descripción
Este proyecto implementa un POC de automatización de pruebas utilizando Cypress con Cucumber en un proyecto basado en JavaScript. La finalidad de este PoC es demostrar cómo escribir y ejecutar pruebas automatizadas utilizando una sintaxis más amigable para el negocio mediante BDD (Behavior-Driven Development).

## Tecnologías

- Lenguaje: JavaScript
- Automatización Web: Cypress
- Gestor de dependencias: npm
- BDD: Cucumber

## Instalación

1. Clonar repositorio.
2. Situarse en la rama "proyecto"
3. Instalar las dependencias:
 - `npm init`
 - `npm install cypress --save -dev`
 - `npm install -D @badeball/cypress-cucumber-preprocessor`
 - `npm install -D @bahmutov/cypress-esbuild-preprocessor esbuild`

### Ejecución de Pruebas

Ejecutar la interfaz gráfica de Cypress:
- `npm cypress open`

Ejecutar pruebas en modo headless
- `npm cypress run`

## Estructura del Proyecto

```├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   ├── ejemplo.feature
│   │   ├── step_definitions/
│   │   │   ├── ejemploSteps.js
|   |   ├── pages/
│   │   │   ├── ejemploPage.js
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
├── cypress.config.js
├── package.json
├── README.md```

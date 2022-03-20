/// <reference types="cypress" />

describe('Cadastro de Usuários', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      });

    it('Visito página de cadastro', () => {
        cy.visit("https://cliente.submarino.com.br/minha-conta/cadastro?next=https%3A%2F%2Fwww.submarino.com.br%2F");
    });

    it('Verifico componentes presentes', () => {
        cy.get('[data-cy="formField__name"]').should('be.visible');
        cy.get('[data-cy="labelFor__F"]').should('be.visible');
        cy.get('[data-cy="labelFor__M"]').should('be.visible');
        cy.get('[data-cy="labelFor__NI"]').should('be.visible');
        cy.get('[data-cy="formField__birthDate"]').should('be.visible');
        cy.get('[data-cy="formField__cpf"]').should('be.visible');
        cy.get('[data-cy="formField__phone"]').should('be.visible');
        cy.get('[data-cy="formField__whatsappNotifications"]').should('be.visible');
        cy.get('[data-cy="formField__email"]').should('be.visible');
        cy.get('[data-cy="formField__promotionalEmails"]').should('be.visible');
        cy.get('[data-cy="formField__password"]').should('be.visible');
        cy.get('[data-cy="formField__dataSharingThirdParty"]').should('be.visible');
        cy.get('[data-cy="signup-submit"]').should('be.visible');
    })

    it('Preencho todos os campos', () => {
        cy.get('[data-cy="formField__name"]').type("Ada Lovelace Tester");
        cy.get('[data-cy="labelFor__F"]').click();
        cy.get('[data-cy="formField__birthDate"]').type("10121815");
        cy.get('[data-cy="formField__cpf"]').type("12345678901");
        cy.get('[data-cy="formField__phone"]').type("12934567890");
        cy.get('[data-cy="formField__email"]').type("adalovelacetester@gmail.com");
        cy.get('[data-cy="formField__password"]').type("Ad@Lov3l4c&");
        cy.get('[data-cy="signup-submit"]').click();
    })

    it('Devo visualizar críticas ao inserir CPF e data de nascimento inválidos', () => {
        cy.get('.sc-cZMLWB').should('be.visible');
        cy.get('.birthDateInput > .sc-hxaKgE').should('be.visible');
        cy.get('.cpfInput > .sc-hxaKgE').should('be.visible');
    })

});

   
    




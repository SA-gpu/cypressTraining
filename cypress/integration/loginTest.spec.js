/// <reference types="cypress" />
const url = Cypress.env('URL')

describe('Login Functionality', () => {
   
   beforeEach(()=> {
      cy.visit(url)
      cy.get('#logInPanelHeading').should('have.text','LOGIN Panel')
    })

   it('Successfull Login Case', () => { 
      cy.get('#divUsername').type('admin')
      cy.get('#txtPassword').type('admin123')
      cy.get('#btnLogin').click()
      cy.get('#menu_dashboard_index').should('be.visible')
   })

   it('Successfull logout Case', () => { 
      cy.get('#divUsername').type('admin')
      cy.get('#txtPassword').type('admin123')
      cy.get('#btnLogin').click()
      cy.get('#menu_dashboard_index').should('be.visible').wait(2000)
      cy.get('#welcome').click()
      cy.get('#welcome-menu').should('be.visible')
      cy.get('#welcome-menu > ul > li:nth-child(2) > a').click()
      cy.get('#logInPanelHeading').should('have.text','LOGIN Panel')
   })
})
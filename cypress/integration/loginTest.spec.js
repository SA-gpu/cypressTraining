/// <reference types="cypress" />
import Login  from "../pageObjects/login"
import Home  from "../pageObjects/home"
const url = Cypress.env('URL')

describe('Login Functionality', () => {
   let login = new Login()
   let home = new Home()

   beforeEach(()=> {
      cy.visit(url)
      login.loginPageAssertion()
   })

   it('Successfull Login Case', () => { 
      cy.login({email:'admin',password:'admin123'})
   })

   it('Retries Login Case on Fail', () => { 
      cy.login({email:'admin',password:'admin23'})
   })

})
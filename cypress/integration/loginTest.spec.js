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
      login.enterUserName('admin')
      login.enterPassword('admin123')
      login.clickOnLoginBtn()
      login.loginAssertion()
   })

   it('Successfull Logout Case', () => { 
      login.enterUserName('admin')
      login.enterPassword('admin123')
      login.clickOnLoginBtn()
      login.loginAssertion()
      home.clickOnWelcomeDropDown()
      home.menuVisibleAssertion()
      home.clickOnDropDownItem('Logout')  
      login.loginPageAssertion()
   })
})
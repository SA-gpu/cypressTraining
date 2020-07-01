import Login  from "../pageObjects/login"
   
   const login = new Login()

   Cypress.Commands.add("login", ({email, password}) => { 
      login.enterUserName(email)
      login.enterPassword(password)
      login.clickOnLoginBtn()
      login.loginAssertion()
   })

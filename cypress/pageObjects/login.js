/// <reference types="cypress" />
import CommonFunc from "../commonFunc/commonFunction"

class login{

   enterUserName(value){
      CommonFunc.typeInElement(value, '#divUsername')
   }

   enterPassword(value){
      CommonFunc.typeInElement(value, '#txtPassword')
   }

   clickOnLoginBtn(){
      CommonFunc.clickOnElement('#btnLogin')
   }

   loginAssertion(){
      CommonFunc.elementShould('#menu_dashboard_index','be.visible')
   }

   loginPageAssertion(){
      CommonFunc.textBaseAssertions('#logInPanelHeading','LOGIN Panel','Login Page Assertion')
   }

}
export default login
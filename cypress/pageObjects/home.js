/// <reference types="cypress" />
import CommonFunc from "../commonFunc/commonFunction"

class home{

   clickOnWelcomeDropDown(){
      CommonFunc.clickOnElement('#welcome')
   }

   clickOnDropDownItem(value){
      if(value == 'About'){
         CommonFunc.clickOnElement('#welcome-menu > ul > li:nth-child(1) > a')
      } else if(value == 'Logout'){
         CommonFunc.clickOnElement('#welcome-menu > ul > li:nth-child(2) > a')
      }
   }

   menuVisibleAssertion(){
      CommonFunc.elementShould('#welcome-menu','be.visible')
   }


   


}
export default home
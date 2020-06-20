class commonFunction{

   static clickOnElement(webElementLocation){
      let element = cy.get(webElementLocation)
      element.click()
   }

   static typeInElement(value, webElementLocation){
      let typeElement = cy.get(webElementLocation)
      typeElement.type(value)
   }

   static elementShould(webElementLocation, shouldMatch){
      let element = cy.get(webElementLocation)
      element.should(shouldMatch)
   }

   static textBaseAssertions(webEleAdd, assertionText, msg){
      let webElement = cy.get(webEleAdd)
      webElement.then(($text)=>{
          let val = $text.text()
          var myReg = new RegExp(assertionText, 'i')
          expect(val).to.match(myReg,msg) 
         })
      }
}

export default commonFunction
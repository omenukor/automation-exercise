export class VerifyTestCasesPage{
    locators = {
        getClickTestCasesButton:() => cy.get('a').contains(' Test Cases'),
        getVerifyUserIsNavigated:() => cy.get('class="title text-center"')
    }
    clickTestCasesButton(){
        this.locators.getClickTestCasesButton()
    }
    verifyUserIsNavigated(){
        this.locators.getVerifyUserIsNavigated()
    }

}
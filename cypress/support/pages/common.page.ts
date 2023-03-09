
export class CommonPage {
    locators = {
        getVerifyHomePage:() => cy.get('h2').contains('Full-Fledged practice website for Automation Engineers'),
        getSignupButton:() => cy.get('a').contains(' Signup / Login'),
    }
    gotoHomePage(){
        cy.visit('https://automationexercise.com')
    }
    verifyHomePage(){
        this.locators.getVerifyHomePage()
    }
    clickSignupButton(){
        this.locators.getSignupButton().click()
    }

}
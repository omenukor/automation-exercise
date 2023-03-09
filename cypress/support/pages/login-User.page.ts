export class LoginUserPage{
    locators = {
        getVerifyLoginUser:() => cy.get('h2').contains('Login to your account'),
        getLoginEmail:() => cy.get('input[data-qa="login-email"]'),
        getLoginPassword:() => cy.get('input[data-qa="login-password"]'),
        getClickLoginButton:() => cy.get('button[data-qa="login-button"]'),
        getVerifyLoggedInAsUsername:() => cy.get('a').contains(' Logged in as ')
    }
    clickLoginPage(){
        cy.clickLink(' Signup / Login')
    }
    verifyLoginUser(){
        this.locators.getVerifyLoginUser()
    }
    loginEmail(email:string){
        this.locators.getLoginEmail().type(email)
    }
    loginPassword(password:string){
        this.locators.getLoginPassword().type(password)
    }
    clickLoginButton(){
        this.locators.getClickLoginButton().click()
    }
    verifyLoggedInAsUsername(){
        this.locators.getVerifyLoggedInAsUsername()
    }

}
export class UserSignupPage{
    locators = {
        getVerifyUserSignup:() => cy.get('h2').contains('New User Signup!'),
        getName:() => cy.get('input[data-qa="signup-name"]'),
        getEmail:() => cy.get('input[data-qa="signup-email"]'),
        getUserSignButton:() => cy.get('button[data-qa="signup-button"]'),
        }
    verifyUserSignup(){
        this.locators.getVerifyUserSignup()
    }
    typeName(name:string,email:string){
        this.locators.getName().type(name)
        this.locators.getEmail().type(email)

    }
    clickUserSignUpButton(){
        this.locators.getUserSignButton().click()
    }
}
export class ContactPage{
    locators = {
        getClickContactUs:() => cy.get('a').contains(' Contact us'),
        getVerifyGetInTorch:() => cy.get('h2').contains('Get In Touch'),
        getName:() => cy.get('input[data-qa="name"]'),
        getEmail:() => cy.get('input[data-qa="email"]'),
        getSubject:() => cy.get('input[data-qa="subject"]'),
        getMessage:() => cy.get('textarea[data-qa="message"]'),
        getUploadFile:() => cy.get('input[name="upload_file"]'),
        getClickSubmitButton:() => cy.get('input[data-qa="submit-button"]'),
        getVerifySuccessMessage:() => cy.get('[class="status alert alert-success"]'),
        getClickHomeButton:() => cy.get('[class="btn btn-success"]'),

    }
    clickContactUs(){
        this.locators.getClickContactUs().click()
    }
    verifyGetInTorch(){
        this.locators.getVerifyGetInTorch()
    }
    fillDetails(name:string,email:string,subject:string,message:string){
        this.locators.getName().type(name)
        this.locators.getEmail().type(email)
        this.locators.getSubject().type(subject)
        this.locators.getMessage().type(message)
    }
    uploadFile(){
        this.locators.getUploadFile()
    }
    ClickSubmitButton(){
        this.locators.getClickSubmitButton().click()
    }
    verifySuccessMessage(){
        this.locators.getVerifySuccessMessage()
    }
    clickHomeButton(){
        this.locators.getClickHomeButton().click()
    }
}
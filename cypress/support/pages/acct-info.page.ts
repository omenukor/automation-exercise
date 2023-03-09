export class AcctInfoPage{
    locators = {
    getVerifyAcctInfo:() => cy.get('b').contains('Enter Account Information'),
    getTitle:() => cy.get('input[id="id_gender1"]'),
    getPassword:() => cy.get('input[data-qa="password"]'),
    getDay:() => cy.get('select[data-qa="days"]'),
    getMonth:() => cy.get('select[data-qa="months"]'),
    getYear:() => cy.get('select[data-qa="years"]'),
    getNewsLetter:() => cy.get('input[id="newsletter"]'),
    getNews:() => cy.get('input[id="newsletter"]'),
    getFirstName:() => cy.get('input[data-qa="first_name"]'),
    getLastName:() => cy.get('input[data-qa="last_name"]'),
    getCompany:() => cy.get('input[data-qa="company"]'),
    getAddress:() => cy.get('input[data-qa="address"]'),
    getAddress2:() => cy.get('input[data-qa="address2"]'),
    getCountry:() => cy.get('select[data-qa="country"]'),
    getState:() => cy.get('input[data-qa="state"]'),
    getCity:() => cy.get('input[data-qa="city"]'),
    getZipcode:() => cy.get('input[data-qa="zipcode"]'),
    getMobileNumber:() => cy.get('input[data-qa="mobile_number"]'),
    getCreateAcctButton:() => cy.get('button[data-qa="create-account"]'),
    }
    verifyAcctInfo(){
        this.locators.getVerifyAcctInfo()
    }
    title(){
        this.locators.getTitle().click()
    }
    password(password:string){
        this.locators.getPassword().type(password)
    }
    selectDob(day:string,month:string,year:string){
        this.locators.getDay().select(day)
        this.locators.getMonth().select(month)
        this.locators.getYear().select(year)
    }
    newsLetter(){
        this.locators.getNewsLetter().click()
    }
    news(){
        this.locators.getNews().click()
    }
    firstName(firstName:string){
        this.locators.getFirstName().type(firstName)
    }
    lastName(lastName:string){
        this.locators.getLastName().type(lastName)
    }
    company(company:string){
        this.locators.getCompany().type(company)
    }
    address(address:string,address2:string){
        this.locators.getAddress().type(address)
        this.locators.getAddress2().type(address2)
    }
    country(country:string){
        this.locators.getCountry().select(country)
    }
    state(state:string){
        this.locators.getState().type(state)
    }
    city(city:string){
        this.locators.getCity().type(city)
    }
    zipcode(zipcode:string){
        this.locators.getZipcode().type(zipcode)
    }
    mobileNumber(mobileNumber:string){
        this.locators.getMobileNumber().type(mobileNumber)
    }
    createAcctButton(){
        this.locators.getCreateAcctButton().click()
    }
}
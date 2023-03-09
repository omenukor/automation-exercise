import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {accInfoPage, commonPage, userSignupPage} from "../pages";


When(/^I verify 'New User Signup!' is visible$/, function () {
    userSignupPage.verifyUserSignup()
});
When(/^I enter "([^"]*)" and "([^"]*)"$/, function (name:string,email:string) {
    userSignupPage.typeName(name,email)
});
Then(/^I click 'Signup' button$/, function () {
    userSignupPage.clickUserSignUpButton()
});
When(/^I verify that 'ENTER ACCOUNT INFORMATION' is visible$/, function () {
    accInfoPage.verifyAcctInfo()
});
When(/^Fill details: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, function (password:string,day:string,month:string,year:string) {
    accInfoPage.title()
    accInfoPage.password(password)
    accInfoPage.selectDob('2', '4', '1980')
});
When(/^I select checkbox 'Sign up for our newsletter!'$/, function () {
    accInfoPage.newsLetter()
});
When(/^I Select checkbox 'Receive special offers from our partners!'$/, function () {
    accInfoPage.news()
});
When(/^I fill my bio data as "([^"]*)", "([^"]*)",$/, function (firstname:string,lastName:string) {
    accInfoPage.firstName(firstname)
    accInfoPage.lastName(lastName)
});
When(/^I fill my company as "([^"]*)",$/, function (company:string) {
    accInfoPage.company(company)
});
When(/^I fill my address as "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)",$/, function (address:string, address2:string, country:string, state:string, city:string, zipcode:string) {

    accInfoPage.address(address,address2)
    accInfoPage.country(country)
    accInfoPage.state(state)
    accInfoPage.city(city)
    accInfoPage.zipcode(zipcode)
});
When(/^I fill my number as "([^"]*)"$/, function (mobileNumber:string) {
    accInfoPage.mobileNumber(mobileNumber)
});
When(/^I click 'Create Account button'$/, function () {
    accInfoPage.createAcctButton()
});
Then(/^I should be able to register$/, function () {

});

 import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
 import {deleteAccountPage, loginUserPage, commonPage, } from "../pages";

 Given(/^I am on the home page$/, function () {
    commonPage.gotoHomePage()
 });
 Given(/^I verify that home page is visible$/, function () {
    commonPage.verifyHomePage()
 });
When(/^I click on signup \/ login button$/, function () {
    loginUserPage.clickLoginPage()
});
When(/^I verify that login to your account is visible$/, function () {
    loginUserPage.verifyLoginUser()
});
Given(/^I enter correct (.*) and (.*)$/, function (email:string,password:string) {
    loginUserPage.loginEmail(email)
    loginUserPage.loginPassword(password)
});
Given(/^I click on login button$/, function () {
    loginUserPage.clickLoginButton()
});
When(/^I verify that logged (.*) is visible$/, function () {
    loginUserPage.verifyLoggedInAsUsername()
});
When(/^I click delete account button$/, function () {
    deleteAccountPage.clickDeleteAccount()
});
Then(/^I should see Delete Account$/, function () {
    deleteAccountPage.verifyAccountDeleted()
});

Given(/^I enter incorrect (.*) and (.*)$/, function (email:string,password:string) {
    loginUserPage.loginEmail(email)
    loginUserPage.loginPassword(password)
});
 Given(/^I click on login button on the page$/, function () {
    loginUserPage.clickLoginButton()
 });
 Then(/^I should verify error Your email or password is incorrect! is visible$/, function () {

 });
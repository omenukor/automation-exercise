import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

Given(/^I navigate to url 'http:\/\/automationexercise\.com'$/, function () {
cy.visit('https://www.automationexercise.com')
});
When(/^I verify that home page is showing successfully$/, function () {
cy.get('h2').contains('Full-Fledged practice website for Automation Engineers')
});
When(/^I click on the 'Signup \/ Login' button$/, function () {
cy.get('a').contains(' Signup / Login').click()
});
When(/^I verify that the 'Login to your account' is visible$/, function () {
cy.get('h2').contains('Login to your account')
});
When(/^I enter incorrect "([^"]*)" address and "([^"]*)"$/, function (email:string,password:string) {
cy.get('input[data-qa="login-email"]').type(email)
    cy.get('input[data-qa="login-password"]').type(password)
});
When(/^I click 'login' button$/, function () {
cy.get('button[data-qa="login-button"]').click()
});
Then(/^I verify error 'Your email or password is incorrect!' is visible$/, function () {
cy.get('p').contains('Your email or password is incorrect!')
});
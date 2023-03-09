import {Given, When} from "@badeball/cypress-cucumber-preprocessor";
import {commonPage} from "../pages";

Given(/^I navigate to url "http:\/\/automationexercise\.com"$/, function () {
    commonPage.gotoHomePage()
});
When(/^I verify that home page is visible successfully$/, function () {
    commonPage.verifyHomePage()
});
When(/^I click on 'Signup \/ Login' button$/, function () {
    commonPage.clickSignupButton()
});

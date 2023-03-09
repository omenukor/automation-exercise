import {When} from "@badeball/cypress-cucumber-preprocessor";
import {verifyTestCasesPage} from "../pages";


When(/^I click on 'Test Cases' button$/, function () {
    verifyTestCasesPage.clickTestCasesButton()
});
When(/^I verify user is navigated to test cases page successfully$/, function () {
    verifyTestCasesPage.verifyUserIsNavigated()
});
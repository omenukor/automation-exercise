import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {contactPage} from "../pages";

Given(/^I click on 'Contact Us' button$/, function () {
    contactPage.clickContactUs()
});
Given(/^I verify 'GET IN TOUCH' is visible$/, function () {
    contactPage.verifyGetInTorch()
});
Given(/^I enter "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)">$/, function (name:string,email:string,subject:string,message:string) {
    contactPage.fillDetails(name,email,subject,message)
});
When(/^I upload file$/, function () {
    contactPage.uploadFile()
});
When(/^I click 'Submit' button$/, function () {
    contactPage.ClickSubmitButton()
});
When(/^I click OK button$/, function () {

});
When(/^I verify success message 'Success! Your details have been submitted successfully\.' is visible$/, function () {
    contactPage.verifySuccessMessage()
});
Then(/^I click 'Home' button and verify that landed to home page successfully$/, function () {
    contactPage.clickHomeButton()
});


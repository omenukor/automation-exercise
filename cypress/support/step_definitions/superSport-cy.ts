import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the superSport URL$/, function () {
      cy.visit('https://supersport.com')
});
When(/^I click on the football$/, function () {
     cy.get('input[data-comp-link-id="football"]').type('football')
});
When(/^I click on the premier league$/, function () {
     cy.get('button[class="text-headingSm font-bold text-neutral-900 dark:text-neutral-50"]').click()
});
Then(/^I should be able to see the premier league table$/, function () {

});
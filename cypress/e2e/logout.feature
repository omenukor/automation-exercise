Feature: Logout
  Background:
Given I navigate to url 'http://automationexercise.com'
And I verify that home page is visible successfully
And I click on 'Signup / Login' button
And I verify that login to your account is visible
When I enter correct "omensemeka@gmail.com" and "nnaemeka77"
And I click 'login' button
Then I verify that logged in as username is visible

    Scenario:
When I click 'Logout' button
Then I verify that user is navigated to login page
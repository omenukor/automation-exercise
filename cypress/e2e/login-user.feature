Feature: Login user

  Background:
    Given I am on the home page
    And I verify that home page is visible
    When I click on signup / login button
    And I verify that login to your account is visible

  Scenario Outline:Login user with correct email and password
    And I enter correct <email> and <password>
    And I click on login button
    When I verify that logged <username> is visible
    When I click delete account button
    Then I should see Delete Account
    Examples:
      | email              | password |username|
      | omensemeka77@gmail.com| nnaemeka77 | emeka|

  Scenario Outline: Login with incorrect email and password
    And I enter incorrect <email> and <password>
    And I click on login button on the page 
    Then I should verify error Your email or password is incorrect! is visible
    Examples:
      | email          | password |
      | nnaa@gmail.com| work123  |













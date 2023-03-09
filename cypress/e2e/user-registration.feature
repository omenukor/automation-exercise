Feature: Register User
  Scenario Outline: user registration
    Given I navigate to url "http://automationexercise.com"
    When I verify that home page is visible successfully
    And I click on 'Signup / Login' button
    And I verify 'New User Signup!' is visible
    When I enter "<name>" and "<email>"
    Then I click 'Signup' button
    When I verify that 'ENTER ACCOUNT INFORMATION' is visible
    And Fill details: "<Title>", "<Name>", "<Email>", "<Password>", "<Date of birth>"
    And I select checkbox 'Sign up for our newsletter!'
    And I Select checkbox 'Receive special offers from our partners!'
    And I fill my bio data as "<firstName>", "<lastName>",
    And I fill my company as "<company>",
    And I fill my address as "<address>", "<address2>", "<country>", "<state>", "<city>", "<zipcode>",
    And I fill my number as "<mobileNumber>"
    And I click 'Create Account button'
    Then I should be able to register

    Examples:
    |name|email|title|password|Day of birth|month of birth|year of birth|firstName|lastName|company|address|address2|country|state|city|zipcode|mobileNumber|
    |ferdinand|Emekaomens@gmail.com|mr|nnaemeka77|2|4    |1980|nnaemeka|omenuko|fedycomm|ekwereazu|ahiara|Canada|imo|owerri|004|0706667321|
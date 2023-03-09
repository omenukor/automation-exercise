Feature: Contact Us
Background:
Given I navigate to url 'http://automationexercise.com'
And I verify that home page is visible successfully


  Scenario: Contact Us
And I click on 'Contact Us' button
And I verify 'GET IN TOUCH' is visible
And I enter "<name>", "<email>", "<subject>" and "<message">
When I upload file
And I click 'Submit' button
And I click OK button
When I verify success message 'Success! Your details have been submitted successfully.' is visible
Then  I click 'Home' button and verify that landed to home page successfully

    Example:
      |name|email|subject|message|
      |ferdinand|omens@gmail.com|hello|thank you|
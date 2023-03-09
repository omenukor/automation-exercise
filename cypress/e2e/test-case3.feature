Feature: Incorrect login
  Scenario Outline: Login incorrect email and password
  Given I navigate to url 'http://automationexercise.com'
  When I verify that home page is showing successfully
  And I click on the 'Signup / Login' button
  And I verify that the 'Login to your account' is visible
  And I enter incorrect "<email>" address and "<password>"
  And I click 'login' button
  Then I verify error 'Your email or password is incorrect!' is visible
    Examples:
    |email|password|
    |nna@gamil.com|321cba|
Feature: Verify All Product
  Background:
  Given I navigate to url 'http://automationexercise.com'
   And I verify that home page is visible successfully

  Scenario:
  When I click on 'Products' button
  And I verify user is navigated to ALL PRODUCTS page successfully
  When The products list is visible
  And I click on 'View Product' of first product
  And User is landed to product detail page
  Then Verify that detail detail is visible: product name, category, price, availability, condition, brand
 export class VerifyAllProductPage{
    locators = {
        getClickProductButton:() => cy.get('a').contains(' Products'),
        getUserNavigatedToAllProduct:() => cy.get('h2').contains('All Products'),
        getProductList:() => cy.get('h2').contains('Category'),
        getClickOnViewProduct:() => cy.get('a').contains('View Product'),
       // getProductDetails:() => cy.get()
    }
 }
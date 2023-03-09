export class DeletePage{
    locator = {
        getClickDeleteAccount:() => cy.get('a').contains('href="/delete_account"'),
        getVerifyAccountDeleted:() => cy.get('b').contains('Account Deleted!')
    }
    clickDeleteAccount(){
        this.locator.getClickDeleteAccount().click()
    }
    verifyAccountDeleted(){
        this.locator.getVerifyAccountDeleted()
    }
}
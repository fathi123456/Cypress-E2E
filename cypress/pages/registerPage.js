export class registerPage{


    webLocators={
        
        firstName: '#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password : '#input-password',
        passwordConfirm : '#input-confirm',
        policyChekbox : 'input[type="checkbox"]',
        continue : '.btn.btn-primary'
    }
    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.webLocators.firstName).type(FName)
    }
    enterLastName(LName){
        cy.get(this.webLocators.lastName).type(LName)
    }
    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }
    enterTelephone(phoneNB){
        cy.get(this.webLocators.telephone).type(phoneNB)
    }
    enterPassword(password){
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.passwordConfirm,{ timeout: 10000 }).should('exist').type(password)
    }
    selectCheckbox(){
        cy.get(this.webLocators.policyChekbox).click()
    }
    clickOnContinue(){
        cy.get(this.webLocators.continue).click()
    }
}
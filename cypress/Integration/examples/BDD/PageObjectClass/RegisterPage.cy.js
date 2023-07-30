class RegisterPage
{
    registerLink = '.ico-register';
    radiobutton = '#gender-female';
    firstname = "#FirstName";
    lastname = '#LastName';
    day = "select[name='DateOfBirthDay']";
    month = "select[name='DateOfBirthMonth']";
    year = "select[name='DateOfBirthYear']";
    email = '#Email';
    company = '#Company';
    password = '#Password';
    confirmpassword = '#ConfirmPassword';
    registerbtn = '#register-button';
    message = 'div.result';
    continue = 'a.button-1';

    loadtheURL()
    {
        cy.visit('https://demo.nopcommerce.com/')
    }

    Clickonregister()
    {
        return cy.get(this.registerLink).click()
    }

    CheckRadioButton()
    {
        return cy.get(this.radiobutton).click()

    }

    EnterFirstName(value)
    {
        cy.get(this.firstname).type(value)
        return this

    }

    EnterlastName(value)
    {
        cy.get(this.lastname).type(value)
        return this
    }

    EnterDay(value)
    {
        cy.get(this.day).select(value)
        return this

    }

    EnterMonth(value)
    {
        cy.get(this.month).select(value)
        return this
    }

    EnterYear(value)
    {
        cy.get(this.year).select(value)
        return this
    }
        
    EnterEmail(value)
    {
        cy.get(this.email).type(value)
        return this
    }

    EnterCompanyName(value)
    {
        cy.get(this.company).type(value)
        return this
    }

    EnterPassword(value)
    {
        cy.get(this.password).type(value)
        return this
    }

    EnterConfirmPassword(value)
    {
        cy.get(this.confirmpassword).type(value)
        return this
    }

    ClickOnRegisterBtn()
    {
       return  cy.get(this.registerbtn).click()
    }
    
    verfiySuccessMessage()
    {

        return cy.get(this.message).should('have.text','Your registration completed')
    }

    ScreenshotOfSuccessMsg()
    {
        return cy.get(this.message).screenshot('registrationsuccessmessage')
    }

    ClickOnContinue()
    {
        return cy.get(this.continue).click()
    }

    VerifyInvalidEmail()
    {
        return cy.get('#Email-error').should('have.text' , 'Wrong email')
    }

    VerifyInvalidPassword()
    {
        return cy.get('#ConfirmPassword-error').should('have.text' , 'The password and confirmation password do not match.')
    }

    ValidateMandatoryerrormessage()
    {
    cy.get('#FirstName-error').should('have.text' , 'First name is required.')
      cy.get('#LastName-error').should('have.text', 'Last name is required.')
      cy.get('#Email-error').should('have.text' , 'Email is required.')
      cy.get('#Password-error').should('have.text' , 'Password is required.')
      cy.get('#ConfirmPassword-error').should('have.text' , 'Password is required.')
    }


}

export default RegisterPage
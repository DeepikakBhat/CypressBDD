class LoginPage
{
    pagetitle = "div[class='page-title']";
    btn='.ico-login';
    emailid= "input[name='Email']";
    password="input[name='Password']";
    loginbtn= "button[class='button-1 login-button']";

    
    loadtheURL()
    {
        cy.visit('https://demo.nopcommerce.com/')
    }

    ClickLogin()
    {
        cy.get(this.btn).click()
    }

    ValidatePageTitle()
    {
        cy.get(this.pagetitle).should('have.text', 'Welcome, Please Sign In!')
    }
    EnterEmailid(value)
    {
       const email = cy.get(this.emailid)
       email.type(value)
    }

    EnterPassword(value)
    {
        cy.get(this.password).type(value)
    }

    ClickLoginButton()
    {
        cy.get(this.loginbtn).click()
    }

    EmailErrorMessage()
    {
        
        const wrongemail  = cy.get('#Email-error')
        wrongemail.should('have.text', 'Wrong email')
        const email = cy.get(this.emailid)
        email.clear()
        //return wrongemail

    }

    EmailPasswordErrorMessage()
    {
        //cy.get('.message-error.validation-summary-errors').should('have.text', 'Login was unsuccessful. Please correct the errors and try again.')
        cy.get('.message-error.validation-summary-errors').should('have.text','Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\n')
    }




}

export default LoginPage
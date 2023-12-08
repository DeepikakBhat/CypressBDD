import { toUpper } from "lodash"
import { toLower } from "lodash"

class LoginPage
{ 

    Username = '#username'
    Password= '#password'
    SignInButton = 'button.signin'
    Privacy = '.mat-focus-indicator.btn.btn-primary'
    Title = "//div[@class='user-name']"
    UsernameValidation = "h6[class='card-sub-title mb-3']"

    
<<<<<<< HEAD
    loadtheURL()
    {
        cy.visit('https://demo.nopcommerce.com/')
        cy.wait(10000)
    }
=======
>>>>>>> 1ff660d3f116d5e77d22afce6285eac70b4b75b0

    EnterUserName(value)
    {
        cy.get(this.Username).type(value)
    }

    EnterPassword(value)
    {
        cy.get(this.Password).type(value)
    }

    ClickonLogin()
    {
        cy.get(this.SignInButton).click()
    }

    ClickOnPrivacy()
    {
        cy.get(this.Privacy).should('be.visible').click()
    }

    VerifypromtMsg()
    {
        
        cy.on('window:alert', (text) => 
        {
            expect(text).to.contains('Welcome!');
        })

        cy.get('.mat-icon').click()
    }

    VerifyTitle(value)
    {
        cy.wait(5000)
        cy.xpath(this.Title).contains(value ).screenshot()
    }

    VerifyUserName(value)
    {
        cy.get(this.UsernameValidation).should('have.text' , value).screenshot()
    }

}

export default LoginPage
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegisterPage from  "../PageObjectClass/RegisterPage.cy";



Given('I open NOPeCommerce page', ()=>
{
    const reg =new RegisterPage()
    reg.loadtheURL()

   // cy.visit('https://demo.nopcommerce.com/')
}
)
    

When('I enter all the mandatory fields in registration page', function(dataTable) {
      
      const reg =new RegisterPage()
      reg.Clickonregister()
      reg.CheckRadioButton()
      reg.EnterFirstName(dataTable.rawTable[1][0])
      reg.EnterlastName(dataTable.rawTable[1][1])
      reg.EnterDay(dataTable.rawTable[1][2])
      reg.EnterMonth(dataTable.rawTable[1][3])
      reg.EnterYear(dataTable.rawTable[1][4])
      reg.EnterEmail(dataTable.rawTable[1][5])
      reg.EnterCompanyName(dataTable.rawTable[1][6])
      reg.EnterPassword(dataTable.rawTable[1][7])
      reg.EnterConfirmPassword(dataTable.rawTable[1][8])
      reg.ClickOnRegisterBtn()
      reg.verfiySuccessMessage()
      reg.ScreenshotOfSuccessMsg()
      reg.ClickOnContinue()
})

Then('New user is registered successfully', ()=>
    {
      const reg =new RegisterPage()
      reg.verfiySuccessMessage()
      reg.ScreenshotOfSuccessMsg()
      reg.ClickOnContinue()

    })
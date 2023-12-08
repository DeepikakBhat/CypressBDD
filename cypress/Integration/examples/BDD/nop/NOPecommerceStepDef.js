import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";

import RegisterPage from  "../PageObjectClass/RegisterPage.cy";
import LoginPage from "../PageObjectClass/LoginPage.cy";
import HomePage from "../PageObjectClass/HomePage.cy";
import Addresspage from "../PageObjectClass/Addresspage.cy";
import ElectronicsPage from "../PageObjectClass/ElectronicsPage.cy";
import ShoppingcartPage from "../PageObjectClass/ShoppingcartPage.cy";


const reg =new RegisterPage()
const LP=new LoginPage()
const HP = new HomePage()
const AP = new Addresspage()
const Elec = new ElectronicsPage()
const SC = new ShoppingcartPage()

let firstname
let lastname
let emailid
let password 

Before({ tags: "@login" }, function () 
{
      reg.loadtheURL()
      LP.ClickLogin()
      LP.EnterEmailid(emailid)
      LP.EnterPassword(password)
      LP.ClickLoginButton()

});

Given('I open NOPeCommerce page', ()=>
{
    
    reg.loadtheURL()
}
)
    

When('I enter all the mandatory fields in registration page', function(dataTable) {
      
      firstname = dataTable.rawTable[1][0]
      lastname = dataTable.rawTable[1][1]
      emailid = dataTable.rawTable[1][5]
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
      
})

Then('New user is registered successfully', ()=>
    {
      
      reg.ClickOnRegisterBtn()
      reg.verfiySuccessMessage()
      reg.ScreenshotOfSuccessMsg()
      reg.ClickOnContinue()

    })

When('Userid and password is entered and clicked on login button', function(dataTable)
{
      emailid = dataTable.rawTable[1][0]
      password = dataTable.rawTable[1][1]
      LP.ClickLogin()
      LP.EnterEmailid(emailid)
      LP.EnterPassword(password)
      
}
)

Then('Login is successfull and title is verified',()=>
{
     LP.ClickLoginButton()
     HP.VerifyTitleOfPage()
})


Given('I Open address page',()=>
{
     AP.ClickOnMyaccount()
     AP.ClickOnAddress()
     AP.ClickOnADDNEW()
    
    
})

When('I enter all mandatory details in address page', function(dataTable)
{
  AP.EnterFirstname(firstname)
  AP.EnterLastname(lastname)
  AP.Enteremail(emailid)
  AP.EnterCountry(dataTable.rawTable[1][0])
  AP.EnterState(dataTable.rawTable[1][1])
  AP.EnterCity(dataTable.rawTable[1][2])
  AP.EnterAddress(dataTable.rawTable[1][3])
  AP.EnterZipCode(dataTable.rawTable[1][4])
  AP.EnterPhoneNumber(dataTable.rawTable[1][5])

})

Then('address is created successfully', ()=>
{
  AP.ClickOnSubmit()
  AP.HandlingAlertBox()
  AP.verifySuccessmessage()

})

Given('I open electronics page',()=>
{
  Elec.clickOnElectronics()

})

When('I add cellphones to cart', function(dataTable)
{
    cy.log('raw : ' + dataTable.raw());
    cy.log('rows : ' + dataTable.rows());
    cy.log('HASHES : ' );
  //let productname = dataTable.rawTable[0][0]
  Elec.ClickOnCellPhone()
  //productname.forEach(function(elemnet)
  {
    //  console.log(elemnet);
    //  cy.log(elemnet)
    //  Elec.AddTOCart(elemnet)
  }

  var propValue;
    dataTable.raw().forEach(elem =>{
      for(var propName in elem) {
        propValue = elem[propName]

        cy.log(propName,propValue);
        Elec.AddTOCart(propValue)
    }
    });

  Elec.VerifySuccessmessage()
})


Then('I veriry the total amount calculated is correct',()=>
{
    SC.clickoncart()
    SC.ValidateSubTotalofcart()
    SC.validateTotalAmount()
})

Then ('Checkout the items from cart' , ()=>
{
  SC.clickoncart()
  SC.pagetitle()
  SC.clickonterms()
  SC.clickoncheckout()
  SC.CheckoutBillingAddr()
  SC.checkoutShippingmtd()
  SC.checkoutPymtmtd()
  SC.checkoutPymtInfo()
  SC.checkoutConfirmorder()
  SC.VerifyPageTitle()
  SC.VerifySuccessmsg()

})


  
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";

<<<<<<< HEAD
import RegisterPage from  "../PageObjectClass/RegisterPage.cy";
import LoginPage from "../PageObjectClass/LoginPage.cy";
import HomePage from "../PageObjectClass/HomePage.cy";
import Addresspage from "../PageObjectClass/Addresspage.cy";
import ElectronicsPage from "../PageObjectClass/ElectronicsPage.cy";
import ShoppingcartPage from "../PageObjectClass/ShoppingcartPage.cy";
=======
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import LoginPage from "../PageObjectClass/LoginPage.cy.js";
import LogoutPage from "../PageObjectClass/LogoutPage.cy.js";
import RegisterPage from "../PageObjectClass/RegisterPage.cy.js";
import ProfilePage from "../PageObjectClass/profilePage.cy.js";

const rp =new RegisterPage()
const lp =new LoginPage()
const lo = new LogoutPage()
const pp = new ProfilePage()

let data

let inboxId
let emailAddress
let emailBody
let otpCode
let code
let For
let Title
let Firstname
let Middlename
let Lastname
let Country 
let PhoneNUmber
let UserID 
let Password 
let ConfrimPassword
let Gender 
let PermanentRes
let GreenCardNum
let POBCountry
let POBState
let POBCity
let POBCitizenship
let MartialStatus
let CADAddr1
let CADAddr2
let CADArea
let CADCountry
let CADState
let CADCity
let CADZipCode
let PADsameCAD
let PADAddr1
let PADAddr2
let PADArea
let PADCountry
let PADState
let PADCity
let PADZipCode
let FADsamePAD
let FADAddr1
let FADAddr2
let FADArea
let FADCountry
let FADState
let FADCity
let FADZipCode
let BIEthnicity
let BIRace
let PDIgnore
let UploadSignature
let DOBYear
let DOBMonth
let DOBDate
>>>>>>> 1ff660d3f116d5e77d22afce6285eac70b4b75b0


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

Given("I open imagibility page", () =>
{
<<<<<<< HEAD
    
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


  
=======
      rp.LoadUrl()
})

When("I enter all the mandatory fields in registration page", function(dataTable)
{
      For = dataTable.rawTable[1][0]
      Title = dataTable.rawTable[1][1]
      Firstname = dataTable.rawTable[1][2]
      Middlename = dataTable.rawTable[1][3]
      Lastname = dataTable.rawTable[1][4]
      Country = dataTable.rawTable[1][5]
      PhoneNUmber = dataTable.rawTable[1][6]
      UserID = dataTable.rawTable[1][7]
      Password = dataTable.rawTable[1][8]
      ConfrimPassword = dataTable.rawTable[1][9]
      rp.Clickonregister()
      rp.ClickOnRadioBtn(For)
      rp.ClickProceed()
      rp.SelectTitle(Title)
      rp.EnterFirstName(Firstname)
      rp.EnterMiddleName(Middlename)
      rp.EnterLastName(Lastname)
      rp.SelctCountry(Country)
      rp.EnterPhoneNumber(PhoneNUmber)
      
      cy.createInbox().then((inbox) =>
      {
          inboxId = inbox.id
          emailAddress = inbox.emailAddress
          cy.get("input[placeholder='Email ']").type(emailAddress)
          cy.log(inboxId)

      rp.EnterUserID(UserID)
      rp.EnterPassword(Password)
      rp.EnterConfirmPassword(ConfrimPassword)
      rp.AcceptTermsandCondition()
      rp.ClickNext()
      rp.clickRadioButton()
      
      cy.waitForLatestEmail(inboxId).then((email) =>
      {
        emailBody = email.body
        const parser = new DOMParser()
        const doc = parser.parseFromString(emailBody, 'text/html')
        var otp = doc.querySelector('body > p:nth-child(4)').textContent
        otpCode = otp.split(' ')[3]
        otpCode = otpCode.trim()
        cy.log(otpCode)
        cy.get("input[placeholder='Enter verification code']").type(otpCode)
         


      })
    })
  })

Then("New user is registered successfully",() =>
{
      rp.ClickOnVerify()
      cy.wait(1000)

})

Given("Login to users", function(dataTable)
{
      Firstname = dataTable.rawTable[1][0]
      Middlename = dataTable.rawTable[1][1]
      Lastname = dataTable.rawTable[1][2]
      UserID = dataTable.rawTable[1][3]
      Password = dataTable.rawTable[1][4]
      lp.EnterUserName(UserID)
      lp.EnterPassword(Password)
      lp.ClickonLogin()
})
     

When("Validate Login Page",  function(dataTable)
{
      Firstname = dataTable.rawTable[1][0]
      Middlename = dataTable.rawTable[1][1]
      Lastname = dataTable.rawTable[1][2]
      UserID = dataTable.rawTable[1][3]
      Password = dataTable.rawTable[1][4]

      lp.ClickOnPrivacy()
      lp.VerifypromtMsg()
      lp.VerifyTitle(Firstname)
      lp.VerifyUserName(UserID)

})

Then("Logout from user", ()=>
{
      lo.LogoutOfPage()

})


When("Validate profile page", function(dataTable)
{
      Firstname = dataTable.rawTable[1][0]
      Middlename = dataTable.rawTable[1][1]
      Lastname = dataTable.rawTable[1][2]
      UserID = dataTable.rawTable[1][3]
      Password = dataTable.rawTable[1][4]
      Gender = dataTable.rawTable[1][5]
      PermanentRes = dataTable.rawTable[1][6]
      GreenCardNum = dataTable.rawTable[1][7]
      POBCountry = dataTable.rawTable[1][8]
      POBState = dataTable.rawTable[1][9]
      POBCity = dataTable.rawTable[1][10]
      POBCitizenship = dataTable.rawTable[1][11]
      MartialStatus = dataTable.rawTable[1][12]
      CADAddr1 = dataTable.rawTable[1][13]
      CADAddr2 = dataTable.rawTable[1][14]
      CADArea = dataTable.rawTable[1][15]
      CADCountry = dataTable.rawTable[1][16]
      CADState = dataTable.rawTable[1][17]
      CADCity = dataTable.rawTable[1][18]
      CADZipCode = dataTable.rawTable[1][19]
      PADsameCAD = dataTable.rawTable[1][20]
      PADAddr1 = dataTable.rawTable[1][21]
      PADAddr2 = dataTable.rawTable[1][22]
      PADArea = dataTable.rawTable[1][23]
      PADCountry = dataTable.rawTable[1][24]
      PADState = dataTable.rawTable[1][25]
      PADCity = dataTable.rawTable[1][26]
      PADZipCode = dataTable.rawTable[1][27]
      FADsamePAD = dataTable.rawTable[1][28]
      FADAddr1 = dataTable.rawTable[1][29]
      FADAddr2 = dataTable.rawTable[1][30]
      FADArea = dataTable.rawTable[1][31]
      FADCountry = dataTable.rawTable[1][32]
      FADState = dataTable.rawTable[1][33]
      FADCity = dataTable.rawTable[1][34]
      FADZipCode = dataTable.rawTable[1][35]
      BIEthnicity = dataTable.rawTable[1][36]
      BIRace = dataTable.rawTable[1][37]
      PDIgnore = dataTable.rawTable[1][38]
      UploadSignature = dataTable.rawTable[1][39]
      DOBYear = dataTable.rawTable[1][40]
      DOBMonth = dataTable.rawTable[1][41]
      DOBDate = dataTable.rawTable[1][42]


    pp.ClickOnEditProfile()
    pp.ClickOnEditPersonalDetails()
    pp.SelectGender(Gender)
    pp.dateOfBirthYear(DOBYear)
    pp.dateofBirthMonth(DOBMonth)
    pp.dateofBirthDate(DOBDate)
   
    if(PermanentRes== 'Y')
    {
        pp.PermanentResidentYes(GreenCardNum)
    }else
    {
    pp.PermanentResidentNo()
     }

    pp.EnterPlaceOfBirthCountry(POBCountry)
    pp.EnterPlaceOfBirthState(POBState)
    pp.EnterPlaceOfBirthCity(POBCity)
    pp.EnterPlaceOfBirthCitizenship(POBCitizenship)
    pp.EnterMartialStatus(MartialStatus)   
    
    cy.wait(1000)

    pp.EnterCurrentAddressAddr1(CADAddr1)
    pp.EnterCurrentAddressAddr2(CADAddr2)
    pp.EnterCurrentAddressArea(CADArea)
    pp.EnterCurrentAddressCountry(CADCountry)
    pp.EnterCurrentAddressState(CADState)
    pp.EnterCurrentAddressCity(CADCity)
    pp.EnterCurrentAddressPostCode(CADZipCode)


   cy.wait(10000)

    if(PADsameCAD == 'Y')
    {
      cy.log('adddress same as current address')
    pp.EnterpermanentAddressSameAsCurrent()
    }else{
      
      cy.log('adddress not same as current address')
      pp.EnterpermanentAddressAddr1(PADAddr1)
      pp.EnterpermanentAddressAddr2(PADAddr1)
      pp.EnterpermanentAddressArea(PADArea)
      pp.EnterpermanentAddressCountry(PADCountry)
      pp.EnterpermanentAddressState(PADState)
      pp.EnterpermanentAddressCity(PADCity)
      pp.EnterpermanentAddressPostCode(PADZipCode)
   }
   cy.wait(1000)
    if(FADsamePAD == 'Y')
    {
      cy.log('adddress same as permanent address')
      pp.EnterForeignAddressSameAsPermanent()
    }
    else 
    {
        cy.log('adddress is not same as permanent address')
        pp.EnterForeignAddressAddr1(FADAddr1)
        pp.EnterForeignAddressAddr2(FADAddr2)
        pp.EnterForeignAddressArea(FADArea)
        pp.EnterForeignAddressCountry(FADCountry)
        pp.EnterForeignAddressState(FADState)
        pp.EnterForeignAddressCity(FADCity)
        pp.EnterForeignAddressPostCode(FADZipCode)
   }

    pp.EnterBiographicInformationEthnicity(BIEthnicity)
    pp.EnterBiographicInformationRace(BIRace)

    pp.EnterPassportDetails()
    pp.ClickOnSaveAsDraft()
    cy.scrollTo('top')
    pp.ClickOnEditPersonalDetails()
    cy.scrollTo('bottom')
    pp.UploadSignatureDocument()
    pp.ClickOnSavebtn()
    cy.scrollTo('top')


})
>>>>>>> 1ff660d3f116d5e77d22afce6285eac70b4b75b0

class RegisterPage
{
    Logo = "img[alt='Imagility Logo']"
    registerlink = "a[href='/login/registerImmigrantType']";

    validateLogo()
        {
            cy.get(this.Logo).should("exist")

        }
    LoadUrl()
    {
        cy.visit("https://demo.imagility.co/")
    }

    Clickonregister()
    {
        cy.get(this.registerlink).click()
    }

    ClickOnRadioBtn(For)
    {
        
        cy.xpath(`(//label[@for="${For}"]//parent::div//div[@class='p-radiobutton p-component'])`).should('be.visible').screenshot().click()

    }

    ClickProceed()
    {
        cy.get('.p-button-label').click()
    }

    
    SelectTitle(Title)
    {    
        cy.wait(1000)
        cy.xpath("//label[contains(text(),'Title')]//parent::div//div[@role='button']").click()
        cy.xpath(`//p-dropdownitem[@class='ng-tns-c75-0 ng-star-inserted']//div[contains(text(),'${Title}')]`).scrollIntoView().click('topRight', { force: true })
    }

    EnterFirstName(value)
    {
        cy.get("input[placeholder='First Name']").type(value)
    }

    EnterMiddleName(value)
    {
        cy.get("input[placeholder='Middle Name']").type(value)
    }

    EnterLastName(value)
    {
        cy.get("input[placeholder='Last Name']").type(value)
    }

    SelctCountry(value)
    {
        //country drop down
        cy.get('.registrations-dropdown > .p-dropdown-label').click()
        cy.get('.p-dropdown-header.ng-tns-c75-1.ng-star-inserted').type(value)
        cy.get('p-dropdownitem:nth-child(2) > li:nth-child(1) > div:nth-child(1)').click()
    }

    EnterPhoneNumber(value)
    {  
        cy.get("input[placeholder='Phone Number']").type(value)
    }


    EnterUserID(value)
    {
        //capture userid and store it in a value
        cy.get('input[formcontrolname="userId"').clear().type(value)
    }

    EnterPassword(value)
    {
        cy.get("input[placeholder='Password']").type(value)
    }
    
    EnterConfirmPassword(value)
    {
        cy.get("input[placeholder='Confirm Password']").type(value)
    }

    AcceptTermsandCondition()
    {
        cy.get('.mat-checkbox-inner-container').click()
    }

    ClickNext()
    {

        cy.get('.p-button-label').click()

    }

    clickRadioButton()
    {
        cy.get("p-radiobutton[value='0'] div[class='p-radiobutton-box']").click()

    }

   

    ClickOnVerify()
    {

        cy.wait(10000)
        cy.get("input[value='Verify']").click()
    }

    VerifySuccessMessage()
    {
        
    }



       /* cy.on('window:confirm',(t) =>
        {
            expect(t).to.contains('Save address')
        })

        */
    }



    


export default RegisterPage
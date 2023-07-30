class Addresspage
{

    ClickOnMyaccount()
    {
        return cy.get('.ico-account').click()
    }

    ClickOnAddress()
    {
        return cy.get('a:contains("Addresses")').first().click()

    }

    ClickOnADDNEW()
    {
        return cy.get("button[class='button-1 add-address-button']").click()
    }

    EnterFirstname(value)
    {
      return  cy.get("input[Name='Address.FirstName']").type(value)
    }

    EnterLastname(value)
    {
        return cy.get("input[Name='Address.LastName']").type(value)
    }

    Enteremail(value)
    {
        return cy.get("input[Name='Address.Email']").type(value)
    }

    EnterCountry(value)
    {
       return  cy.get("select[Name='Address.CountryId']").select(value)
    }

    EnterState(value)
    {
        return cy.get("select[Name='Address.StateProvinceId']").select(value)
    }

    EnterCity(value)
    {
        return cy.get("input[Name='Address.City']").type(value)
    }

    EnterAddress(value)
    {
        return cy.get("input[Name='Address.Address1']").type(value)
    }

    EnterZipCode(value)
    {
        return cy.get("input[Name='Address.ZipPostalCode']").type(value)
    }

    EnterPhoneNumber(value)
    {
        return cy.get("input[Name='Address.PhoneNumber']").type(value)
    }

    ClickOnSubmit()
    {
        return cy.get("button[type='submit']").last().click()
    }

    verifySuccessmessage()
    {
        cy.get('.close').click()
        return cy.get("div[class='bar-notification success']").should('have.text',"The new address has been added successfully.")
    }

    Validatemandatoryfields()
    {
        cy.get('#Address_FirstName-error').should('have.text','First name is required.')
        cy.get('#Address_LastName-error').should('have.text','Last name is required.')
        cy.get('#Address_Email-error').should('have.text','Email is required.')
        cy.get('#Address_City-error').should('have.text','City is required')
        cy.get('#Address_Address1-error').should('have.text','Street address is required')
        cy.get('#Address_ZipPostalCode-error').should('have.text','Zip / postal code is required').scrollIntoView()
        cy.get('#Address_PhoneNumber-error').should('have.text','Phone is required')

    }


    ValidateWhenWrongEmailIsEntered()
    {
         cy.get('#Address_Email-error').should('have.text','Wrong email')
    }

    HandlingAlertBox()
    {

        cy.on('window:confirm',(t) =>
        {
            expect(t).to.contains('Save address')
        })
        
    }




}

export default Addresspage
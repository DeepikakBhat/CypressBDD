class profilePage {

    Profile = '.edit-btn.edit-profile-btn.im-btn.im-btn-light.im-btn-lg.py-2.px-3.mb-2'
    PersonalDetails = '.back-button.button-width-icon-left.btn-pos-top-right.ng-star-inserted'
    GenderLink = ".col-3.ng-untouched > .ng-untouched > .p-dropdown > .p-dropdown-trigger"




    ClickOnEditProfile() {
        cy.get(this.Profile).click()
    }

    ClickOnEditPersonalDetails() {
        cy.get(this.PersonalDetails).click()
    }

    SelectGender(Gender) {
        cy.get(this.GenderLink).should('exist').click()
        cy.xpath(`//span[@class="ng-star-inserted" and text( ) = '${Gender}']`).should('exist').click()
    }

    dateOfBirthYear(year) {
        cy.xpath('//p[text()="Date Of Birth"]//parent::div//button').click()
        cy.xpath('//button[@aria-label="Choose month and year"]').click()

        if (year >= 2000 && year <= 2023) {
            cy.xpath(`//div[@class='mat-calendar-body-cell-content mat-focus-indicator' and contains(text() , '${year}')]`).click()
        } else if (year <= 2000) {
            cy.xpath('//button[@aria-label="Previous 20 years"]').click()
        }

        if (year >= 1976 && year <= 1999) {
            cy.xpath(`//div[@class='mat-calendar-body-cell-content mat-focus-indicator' and contains(text() , '${year}')]`).click()

        } else if (year <= 1976) {
            cy.xpath('//button[@aria-label="Previous 20 years"]').click()
        }

        if (year >= 1952 && year <= 1975) {
            cy.xpath(`//div[@class='mat-calendar-body-cell-content mat-focus-indicator' and contains(text() , '${year}')]`).click()
        }

    }


    dateofBirthMonth(Month) {
        cy.xpath(`//div[@class='mat-calendar-body-cell-content mat-focus-indicator' and contains(text() , '${Month}')]`).click()

    }

    dateofBirthDate(Date) {
        cy.xpath(`//div[@class='mat-calendar-body-cell-content mat-focus-indicator' and contains(text() , '${Date}')]`).click()

    }

    PermanentResidentYes(value) {
        cy.xpath("(//p[contains(text(),'Are you a Lawful Permanent Resident?')]//parent::div//p-radiobutton[@label='Yes']//div)[1]").click()
        cy.xpath("//input[@formcontrolname='greenCardNo']").clear().type(value)
    }

    PermanentResidentNo() {
        cy.xpath("(//p[contains(text(),'Are you a Lawful Permanent Resident?')]//parent::div//p-radiobutton[@label='No']//div)[1]").click()
    }

    EnterPlaceOfBirthCountry(Country) {
        cy.xpath('(//h5[contains(text(),"Place of Birth")]//parent::div//parent::div//following-sibling::div//p-dropdown[@formcontrolname="countryCode"]//div[@role="button"])[1]').click()
        cy.get(`li[aria-label='${Country}'] span[class='ng-star-inserted']`).click()
    }

    EnterPlaceOfBirthState(State) {
        cy.xpath('//h5[contains(text(),"Place of Birth")]//parent::div//parent::div//following-sibling::div//p-dropdown[@formcontrolname="birthStateProvinceCode"]//div[@role="button"]').click()
        cy.get(`li[aria-label='${State}'] span[class='ng-star-inserted']`).click()
    }

    EnterPlaceOfBirthCity(City) {

        cy.get("input[formcontrolname='birthCity']").type(City)
    }

    EnterPlaceOfBirthCitizenship(Citizenship) {
        cy.xpath('(//h5[contains(text(),"Place of Birth")]//parent::div//parent::div//following-sibling::div//p-dropdown[@formcontrolname="countryCode"]//div[@role="button"])[2]').click()
        cy.get(`li[aria-label='${Citizenship}']`).click()
    }


    EnterMartialStatus(MartialStatus) {
        cy.xpath(`//label[text() = '${MartialStatus}']//parent::div//p-radiobutton[@name='id']`).should('be.visible').click()
    }

    EnterCurrentAddressAddr1(address1) {

        cy.xpath("(//input[@formcontrolname='addressLine1'])[1]").clear().type(address1)
    }

    EnterCurrentAddressAddr2(address2) {
        cy.xpath("(//input[@formcontrolname='addressLine2'])[1]").clear().type(address2)
    }

    EnterCurrentAddressArea(area) {
        cy.xpath("(//input[@formcontrolname='locality'])[1]").clear().type(area)

    }

    EnterCurrentAddressCountry(country) {
        cy.xpath("(//h5[contains(text(),'Current Address Details')]//parent::div//parent::div//following-sibling::div//p-dropdown[@formcontrolname='countryCode']//div[@role='button'])[1]").click()
        cy.xpath(`//li[@role="option" and @aria-label="${country}"]`).click()
    }
    EnterCurrentAddressState(state) {
        cy.xpath("(//h5[contains(text(),'Current Address Details')]//parent::div//parent::div//following-sibling::div//p-dropdown[@formcontrolname='stateProvinceCode']//div[@role='button'])").click()
        cy.xpath(`//li[@role="option" and @aria-label="${state}"]`).click()
    }
    EnterCurrentAddressCity(city) {
        cy.xpath('(//input[@formcontrolname="city"])[1]').clear().type(city)
    }
    EnterCurrentAddressPostCode(pincode) {
        cy.xpath('(//input[@formcontrolname="postCode"])[1]').clear().type(pincode)
    }

    EnterpermanentAddressSameAsCurrent() {
        cy.xpath("//h5[text()='Permanent Address Details']/parent::div/parent::div/div[2]//mat-checkbox//label/span[1]").click()
    }

    EnterpermanentAddressAddr1(address1) {
        //cy.xpath("(//input[@formcontrolname='addressLine1'])[2]").clear().type(address1)
        cy.xpath('(//h5[contains(text(),"Permanent Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="addressLine1"])[1]').clear().type(address1)
    }
    EnterpermanentAddressAddr2(address2) 
    {
        cy.xpath('(//h5[contains(text(),"Permanent Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="addressLine2"])[1]').clear().type(address2)
        //cy.xpath("(//input[@formcontrolname='addressLine2'])[2]").clear().type(address2)
    }

    EnterpermanentAddressArea(area) 
    {
        cy.xpath('(//h5[contains(text(),"Permanent Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="locality"])[1]').clear().type(area)
        //cy.xpath("(//input[@formcontrolname='locality'])[2]").clear().type(area)
    }

    EnterpermanentAddressCountry(country) {
        cy.xpath('(//h5[contains(text(),"Permanent Address Details")]//parent::div//parent::div//following-sibling::div//p-dropdown[@formcontrolname="countryCode"]//div[@role="button"])[1]').click()
        cy.xpath(`(//li[@role="option" and @aria-label="${country}"])`).click()
    }
    EnterpermanentAddressState(state) {
        cy.xpath("(//h5[contains(text(),'Permanent Address Details')]//parent::div//parent::div//following-sibling::div//p-dropdown[@formcontrolname='stateProvinceCode']//div[@role='button'])").click()
        cy.xpath(`(//li[@role="option" and @aria-label="${state}"])`).click()
    }

    EnterpermanentAddressCity(city) 
    {
        cy.xpath('(//h5[contains(text(),"Permanent Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="city"])[1]').clear().type(city)
        //cy.xpath('(//input[@formcontrolname="city"])[1]').clear().type(city)
    }
    EnterpermanentAddressPostCode(pincode) {

          cy.xpath('(//h5[contains(text(),"Permanent Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="postCode"])[1]').clear().type(pincode)
        //cy.xpath('(//input[@formcontrolname="postCode"])[1]').clear().type(pincode)
    }


    EnterForeignAddressSameAsPermanent() {
        cy.xpath("//h5[text()='Foreign Address Details']/parent::div/parent::div/div[2]//mat-checkbox//label/span[1]").click()

    }

    EnterForeignAddressAddr1(address1) 
    {

        //cy.xpath("(//input[@formcontrolname='addressLine1'])[1]").clear().type(address1)
        cy.xpath('(//h5[contains(text(),"Foreign Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="addressLine1"])[1]').clear().type(address1)
    }
    EnterForeignAddressAddr2(address2) 
    {
        cy.xpath('(//h5[contains(text(),"Foreign Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="addressLine2"])[1]').clear().type(address2)
        //cy.xpath("(//input[@formcontrolname='addressLine2'])[1]").clear().type(address2)
    }

    EnterForeignAddressArea(area) 
    {
        cy.xpath('(//h5[contains(text(),"Foreign Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="locality"])[1]').clear().type(area)
        //cy.xpath("(//input[@formcontrolname='locality'])[1]").clear().type(area)

    }

    EnterForeignAddressCountry(country) 
    {
        cy.xpath('(//h5[contains(text(),"Foreign Address Details")]//parent::div//parent::div//following-sibling::div//p-dropdown[@formcontrolname="countryCode"]//div[@role="button"])[1]').click()
        cy.xpath(`(//li[@role="option" and @aria-label="${country}"])`).click()
    }
    EnterForeignAddressState(state) 
    {
        cy.xpath("(//h5[contains(text(),'Foreign Address Details')]//parent::div//parent::div//following-sibling::div//p-dropdown[@formcontrolname='stateProvinceCode']//div[@role='button'])").click()
        cy.xpath(`//li[@class='p-dropdown-item p-ripple' and @aria-label="${state}"]`).click()
    }

    EnterForeignAddressCity(city) 
    {
        cy.xpath('(//h5[contains(text(),"Foreign Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="city"])[1]').clear().type(city)
        //cy.xpath('(//input[@formcontrolname="city"])[1]').clear().type(city)
    }
    EnterForeignAddressPostCode(pincode) 
    {
        cy.xpath('(//h5[contains(text(),"Foreign Address Details")]//parent::div//parent::div/following-sibling::div[@formarrayname="address"]//div//input[@formcontrolname="postCode"])[1]').clear().type(pincode)
        //cy.xpath('(//input[@formcontrolname="postCode"])[1]').clear().type(pincode)
    }


    EnterBiographicInformationEthnicity(Ethnicity) {
        cy.xpath(`(//label[text()='${Ethnicity}']//parent::div//div[@class='p-radiobutton-box'])`).click()
    }
    EnterBiographicInformationRace(Race) {
        cy.xpath(`(//label[text()='${Race}']//parent::p-checkbox//div//div[@class='p-checkbox-box'])`).click()
    }

    EnterPassportDetails() {
        cy.xpath("//label[text()='Ignore passport details']//parent::p-checkbox//div//div[@class='p-checkbox-box']").click()
    }

    ClickOnSaveAsDraft() {
        cy.get("button[class='btn btn-success button-width-icon-left']").click()
    }

    UploadSignatureDocument() {
        cy.xpath("//button[@class='signaturePromptBtn btn btn-primary btn-lg']").click()
        //cy.xpath("//input[@type='file']").click()
        cy.get("#file-input").attachFile('signature.png')
        cy.get('.btn.btn-primary.ng-star-inserted').screenshot().click()
    }

    ClickOnSavebtn() {
        cy.xpath("//i[@class='fa fa-floppy-o']//parent::button").screenshot().click()
    }

}

export default profilePage
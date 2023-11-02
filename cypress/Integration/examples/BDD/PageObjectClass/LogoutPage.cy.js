class LogoutPage
{
    LogoutLink = "img[src='../../../../assets/images/dropdown-icon.svg']"
    LogoutText = "//a[contains(text(),'Logout')]"

    LogoutOfPage()
    {   
        cy.scrollTo('top')
        cy.get(this.LogoutLink).scrollIntoView().click()
        cy.xpath(this.LogoutText).should('exist').scrollIntoView().click('topRight', { force: true })
    }

}

export default LogoutPage

class LogoutPage
{
<<<<<<< HEAD
    Logout()
    {
           return cy.get(".ico-logout").click()
           cy.wait(10000)
=======
    LogoutLink = "img[src='../../../../assets/images/dropdown-icon.svg']"
    LogoutText = "//a[contains(text(),'Logout')]"

    LogoutOfPage()
    {   
        cy.scrollTo('top')
        cy.get(this.LogoutLink).scrollIntoView().click()
        cy.xpath(this.LogoutText).should('exist').scrollIntoView().click('topRight', { force: true })
>>>>>>> 1ff660d3f116d5e77d22afce6285eac70b4b75b0
    }

}

export default LogoutPage

class LogoutPage
{
    Logout()
    {
           return cy.get(".ico-logout").click()
           cy.wait(10000)
    }
    
}

export default LogoutPage
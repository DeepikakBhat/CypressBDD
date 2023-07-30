class HomePage
{
    VerifyTitleOfPage()
    {
        return cy.title().should('be.equal','nopCommerce demo store')
    }

    LogallmenufromHomePage()
    {
        const items = [] 
        //cy.get('.top-menu.notmobile>li>a').each(($a) => cy.log($a.text()))
        cy.get('.top-menu.notmobile>li>a')
        .each(($a) => items.push($a.text()))
        .then(() => 
        {
        cy.log(items.join(', '))
        })
    }

    VerifyAllMenusarepresent(HomePageMenus)
    {
        cy.get('.top-menu.notmobile>li>a').each(($el, index, $list) =>
    {
      if($el.text().includes(HomePageMenus))
      {
        cy.pause()
        cy.log('menus are present')
      }})
    }

    VerifyBlockTitle()
    {
        return cy.get('.topic-block-title>h2').should('have.text' , 'Welcome to our store')
    }



}

export default HomePage
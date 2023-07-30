class ElectronicsPage
{


    clickOnElectronics()
    {

        //cy.get("cy.get('.menu-toggle')").click()
        cy.get('.notmobile > :nth-child(2) > [href="/electronics"]').click()
        //cy.get("ul[class='top-menu notmobile']>li(2)").click()
     }

     ClickOnCellPhone()
     {
         cy.get('.active > .sublist > :nth-child(2) > a').click()
        //cy.get('a:contains("Cell phones ")').click()
     }

     SortByAtoZ()
     {
        cy.get('#products-orderby').select('Name: A to Z')
     }

     AddFirstPhonetoCart()
     {

      cy.get(' .buttons > .product-box-add-to-cart-button').first().click()

     }

     VerifySuccessmessage()
     {
            cy.get('.content').contains('The product has been added to your shopping cart')
     }

     AddTOCart(productname)
      {
         cy.get('.product-title').each(($el, index, $list) =>
         {
            if($el.text().includes(productname))
            {
               cy.wait(3000)
               cy.get('.button-2.product-box-add-to-cart-button').eq(index).click()
            }
         })
      }
         
      
   }

export default ElectronicsPage
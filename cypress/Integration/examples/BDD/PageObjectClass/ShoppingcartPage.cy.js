class ShoppingcardPage
{
    

    ValidateSubTotalofcart()
    {
        var sum=0
   
        cy.get('tr td:nth-child(6)').each(($el, index, $list) =>
        {
        cy.log($el.text())
        const amount =  $el.text()
        var res=amount.split("$")
        cy.log(res)
        res=res[1].trim()
        cy.log(res)
     sum=Number(sum)+Number(res)
        cy.log(sum)
        })
        .then(function()
        {
            cy.log(sum)
        })
        //compare the sum
       cy.get('.order-subtotal td:nth-child(2) span').then(function(element)
        {
          const totalamt=element.text()
         var res=totalamt.split("$")
         var subtotalamt=res[1].trim()
         expect(Number(subtotalamt)).to.equal(sum)
        })
    }

    validateTotalAmount()
    {
        //total amount includes tax and shipping
        var sum=0
        var SandT=0
       cy.get('.shipping-cost td:nth-child(2) .value-summary').then(($txt) =>
       {
        var shippingcost=$txt.text()
        var shipping=shippingcost.split("$")
        shipping=shipping[1].trim()
      
        cy.get('.tax-value td:nth-child(2) .value-summary').then(($txt) =>
        {   
            var taxvalue=$txt.text()
            var tax=taxvalue.split("$")
            tax=tax[1].trim()
        
        SandT=Number(shipping)+Number(tax)

       cy.get('.order-subtotal td:nth-child(2) .value-summary').then(($txt) =>
        {
            var ordersubtotal=$txt.text()
            var subtotal=ordersubtotal.split("$")
            subtotal=subtotal[1].trim()

            sum = Number(SandT)+Number(subtotal)

        })


       })
    }).then(function()
    {
        cy.log(sum)
    })


      

        //compare total with order-sub total+tax+shipping

        cy.get('.order-total td:nth-child(2) .value-summary').then(function(element)
        {
          const ordertotalamt=element.text()
         var res=ordertotalamt.split("$")
         var totalamt=res[1].trim()
         expect(Number(totalamt)).to.equal(sum)
        })





    }
    clickoncart()
    {
        return cy.get('.cart-label').click()
    }

    pagetitle()
    {
        return cy.get('.page-title').should('have.text','Shopping cart')

    }

    clickonterms()
    {
        return  cy.get("input[name='termsofservice']").click()
    }

    clickoncheckout()
    {
        return cy.get("button[name='checkout']").click()
    }

    CheckoutBillingAddr()
    {
        return cy.get("button[class='button-1 new-address-next-step-button']").first().click()
    }

    checkoutShippingmtd()
    {
        return cy.get("button[class='button-1 shipping-method-next-step-button']").click()
    }

    checkoutPymtmtd()
    {
        return cy.get("button[class='button-1 payment-method-next-step-button']").click()
    }

    checkoutPymtInfo()
    {
        return cy.get("button[class='button-1 payment-info-next-step-button']").click()
    }

    checkoutConfirmorder()
    {
        return cy.get("button[class='button-1 confirm-order-next-step-button']").click()
    }

    VerifyPageTitle()
    {
        return  cy.get("div[class='page-title']").should('have.text','Thank you')
    }
    VerifySuccessmsg()
    {
        return cy.get("div[class='title']").first().should('have.text','Your order has been successfully processed!')
    }






}

export default ShoppingcardPage
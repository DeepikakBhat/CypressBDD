Feature:End to end testing on NOPCommerce site
    
     
Scenario:Register the new user 

Given I open NOPeCommerce page
When I enter all the mandatory fields in registration page
|firstname | lastname | day | month | year | email | company | password | password |
| john | cena | 25 | January | 1988 | johncena27@gmail.com | company | JOHNcen@4455 | JOHNcen@4455 |
Then New user is registered successfully



Scenario:Login to nopcommere application

Given I open NOPeCommerce page
When Userid and password is entered and clicked on login button
| emailid | password|
| johncena27@gmail.com | JOHNcen@4455 |
Then Login is successfull and title is verified


@login
Scenario: Add the address of the new user created

Given I Open address page
When I enter all mandatory details in address page
| country | state | city | address | zipcode | phonenumber |
| India | Other | bangalore | jayanaga 1st block | 560078 | 7788996678 |
Then address is created successfully


@login

Scenario: Add the cellphone to cart,validate the totoal amount in cart page and check out the item

Given I open electronics page
When I add cellphones to cart
|HTC|
|Nokia|
Then I veriry the total amount calculated is correct
And Checkout the items from cart
Feature:End to end testing on NOPCommerce site
    
     
Scenario:Register the new user 

Given I open NOPeCommerce page
When I enter all the mandatory fields in registration page
|firstname | lastname | day | month | year | email | company | password | password |
| john | cena | 25 | January | 1988 | johncenatime@gmail.com | company | JOHNcena4455 | JOHNcena4455|
Then New user is registered successfully
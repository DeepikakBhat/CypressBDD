Feature:End to end testing on NOPCommerce site
<<<<<<< HEAD
    
     
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
=======



Scenario:Register page validation
Given I open imagibility page
When I enter all the mandatory fields in registration page
| For | Title | Firstname | Middlename | Lastname | Country | PhoneNUmber | UserID | Password | ConfrimPassword |
| INDVDL | Mr. | Deepika | g | Gomez | India | 9988776789 | UvIn134th | Dee255@!p3 | Dee255@!p3 |
Then New user is registered successfully

Scenario: Login page validation
Given Login to users
| Firstname | Middlename | Lastname |  UserID | Password |
| Deepika | g | Gomez |  UvIn134th | Dee255@!p3 |
When Validate Login Page
| Firstname | Middlename | Lastname |  UserID | Password |
| Deepika | g | Gomez |  UvIn134th | Dee255@!p3 |
Then Logout from user


Scenario:Profile page validation
Given Login to users
| Firstname | Middlename | Lastname |  UserID | Password |
| Deepika | g | Gomez |  UvIn134th | Dee255@!p3 |
When Validate profile page
| Firstname | Middlename | Lastname |  UserID | Password | Gender |	PermanentRes | GreenCardNum | POBCountry | POBState	| POBCity | POBCitizenship | MartialStatus | CADAddr1 | CADAddr2 | CADArea | CADCountry | CADState | CADCity | CADZipCode | PADsameCAD | PADAddr1 | PADAddr2 | PADArea | PADCountry | PADState | PADCity | PADZipCode | FADsamePAD | FADAddr1 | FADAddr2 | FADArea | FADCountry | FADState | FADCity | FADZipCode | BIEthnicity | BIRace | PDIgnore | UploadSignature | DOBYear | DOBMonth | DOBDate |
| Deepika | g | Gomez |  UvIn134th | Dee255@!p3 | Male	| Y | 	SRC0000000003 | India | Karnataka | bangalore | India | Divorced | 12th main road | 4th cross | kanakpura | India | Karnataka | Bangalore | 560098 | Y	|  |  |  |  |  |  |  |	Y |  |  |  |  |  |  |  | Not Hispanic or Latino	| Asian | 	|   |	1989 |	JUL |	22 |
Then Logout from user




>>>>>>> 1ff660d3f116d5e77d22afce6285eac70b4b75b0

Feature:End to end testing on NOPCommerce site



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





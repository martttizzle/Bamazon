 # Bamazon 
 ## Synopsis
I have created a project in which a user can use node.js to edit and update mysql tables directly. The projects has two types of operators. The first is a customer purchase options, who can purchase items available. The second is a manager view, which can alter items.

## Motivation
I wanted to show my knowledge of using node.js to edit mysql in real-time. I wanted to also showcase my skills of working in the back-end of web development. 

# Code walk-through for Customer
I will break down both customer and manager modes of Bamazon. I will use screenshots to walk-through the steps. 

### Database
 This is the database in mysql that I used to create a table to be used for the customer. I made a primary key as the id for specific items 

![custeromsqlpage](https://user-images.githubusercontent.com/21042727/41106304-6589f316-6a35-11e8-9767-263aaaae4370.PNG)

### Home Page
 This screenshost shows all the items that a customer can purchase. 
 
![beginning page](https://user-images.githubusercontent.com/21042727/41106323-7299236a-6a35-11e8-9536-8c9f304a1131.PNG)

 Then the customer will be prompted to make a selection by ID number. Note the quantity of basketballs are at 75.
 
![promptitempurchase](https://user-images.githubusercontent.com/21042727/41106325-73c6a168-6a35-11e8-881c-050c22034d62.PNG)

 The customer will choose to purchase a basketball in this example. I have added in a protection if the user exceeds the quantity available it  will prompt a message and then restart back to purchase screen. This also protects the mysql from any receiving any incorrect data.  
 
 ![exceededquant](https://user-images.githubusercontent.com/21042727/41107784-a75528da-6a38-11e8-887b-c21cda2c6261.PNG)
 
 ### Purchase Made
 The screenshot below shows if the user enter anything else other than a number, will get an error and restart again. The customer purchasesbasketballs. It will message the user that it is updating, which is when the mysql is being impacted. Once that is complete the user will see a total bill of sale and then after 5 seconds the items start page is displayed for another purchase. 
 
 ![purchasemade](https://user-images.githubusercontent.com/21042727/41106327-750e7fbe-6a35-11e8-9c59-ed281643e786.PNG)
 
 This image shows that the quantity of basketballs is now at 72 instead of the 75 before purchase. 
 
![afterpurchasetable](https://user-images.githubusercontent.com/21042727/41106317-6fe954fa-6a35-11e8-9081-2e79db540b00.PNG)


# Code walk-through for Manager
This is the walk-through of the Bamazon Manager mode.

### Database
The screenshot below shows the database setup that was used. It is the same as the customer's database but different name.

![managerbamazonsqlpage](https://user-images.githubusercontent.com/21042727/41106401-954b6800-6a35-11e8-97fe-e18cb3f9df0a.PNG)

### Home Page
This is the view of the Manager mode. It shows a menu of all the functions you can execute. 

![bamazonmanagermenu](https://user-images.githubusercontent.com/21042727/41106396-9423df02-6a35-11e8-942f-cc524c9cb6e7.PNG)

 ### View Products
 
 This screenshot shows the view products when selected. It shows an update of all items including quantity available. I have added in a back prompt when selected will bring you back to the home menu page. 
 
![viewproductschoice](https://user-images.githubusercontent.com/21042727/41106414-98036f20-6a35-11e8-8b58-0216824bcc7e.PNG)

### View Low-Inventory
 
 This screenshot below shows all items with a quantity of less-than 5. 
 
 ![viewlowquantity](https://user-images.githubusercontent.com/21042727/41106408-9725ca08-6a35-11e8-859d-58b248a62c76.PNG)

### Add to Inventory
 
 This screenshot shows that quantity of stock can be added. When you choose Add to Inventory it will prompt which department you would like to add to. Then will pull up all the items in the department choosen. 
 
 ![addquantity](https://user-images.githubusercontent.com/21042727/41106385-8f930dd2-6a35-11e8-86ba-d883d90faa5a.PNG)

  This screenshot ask for ID entered and how many units to add. Then after input it will prompt manager with messaesaying it was usccessful. You see now that ID#1 was updated to a total of 101 items (previous was 1). 
 
 ![addquantityresults](https://user-images.githubusercontent.com/21042727/41106393-92ecd896-6a35-11e8-8471-fefaae678079.PNG)



### Add New Products

This screenshot shows the manager four prompts to fill-out to add a new product. This will directly impact the mysql database.  Once the manager has entered all required prompts, a message will appear saying it was successful. Then after three seconds it will bring manager to home page. 

![adding new menu](https://user-images.githubusercontent.com/21042727/41106367-8790ea5a-6a35-11e8-8cd4-7be93c5c6db4.PNG)
 
 This screenshot show the basketball was added to the list items for sale.
 
![newproductadded](https://user-images.githubusercontent.com/21042727/41106406-965a57a6-6a35-11e8-919e-e0009764be40.PNG)


## License
 I used current version of Node.js with MYSQL Workbench. I added in npm packages of mysql and require.
No API's were used. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

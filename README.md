 # Bamazon
 ## Synopsis
I have created a project in which a user can use node.js to edit and mysql tables. The projects has two type of operators. The first is a customer purchase screen, who can purchase items available. The second is a manager view. Each have unique abilities and both affect the same mysql tables. 


## Motivation
I wanted to show my knowledge of using node.js to edit mysql in real-time. I wanted to also showcase my skills of working in the back-end of web development. 

## Code walk-through
I will break down both customer and manager of Bamazon. I will use screenshots to walk-through the steps. 
### Database
 This is the database in mysql that I used to create a table to be used for the customer. I made a primary key as the id for specific items 

![custeromsqlpage](https://user-images.githubusercontent.com/21042727/41106304-6589f316-6a35-11e8-9767-263aaaae4370.PNG)

### Items Available
 This screen shows all the items that a customer can purchase. 
![beginning page](https://user-images.githubusercontent.com/21042727/41106323-7299236a-6a35-11e8-9536-8c9f304a1131.PNG)

 Then the customer will be prompted to make a selection by ID number. Note the quantity of basketballs are at 75.
![promptitempurchase](https://user-images.githubusercontent.com/21042727/41106325-73c6a168-6a35-11e8-881c-050c22034d62.PNG)
 The customer will choose to purchase a basketball in this example. I have added in a protection incase number was entered incorrectly and also(not shown) If the user exceeds the quan
 ![purchasemade](https://user-images.githubusercontent.com/21042727/41106327-750e7fbe-6a35-11e8-9c59-ed281643e786.PNG)
 
![afterpurchasetable](https://user-images.githubusercontent.com/21042727/41106317-6fe954fa-6a35-11e8-9081-2e79db540b00.PNG)
 Now, the prev



manager 
![adding new menu](https://user-images.githubusercontent.com/21042727/41106367-8790ea5a-6a35-11e8-8cd4-7be93c5c6db4.PNG)


![addquantity](https://user-images.githubusercontent.com/21042727/41106385-8f930dd2-6a35-11e8-86ba-d883d90faa5a.PNG)
![addquantity2](https://user-images.githubusercontent.com/21042727/41106391-9174bf2e-6a35-11e8-98bc-e2aae21aa323.PNG)
![addquantityresults](https://user-images.githubusercontent.com/21042727/41106393-92ecd896-6a35-11e8-8471-fefaae678079.PNG)
![bamazonmanagermenu](https://user-images.githubusercontent.com/21042727/41106396-9423df02-6a35-11e8-942f-cc524c9cb6e7.PNG)
![managerbamazonsqlpage](https://user-images.githubusercontent.com/21042727/41106401-954b6800-6a35-11e8-97fe-e18cb3f9df0a.PNG)
![newproductadded](https://user-images.githubusercontent.com/21042727/41106406-965a57a6-6a35-11e8-919e-e0009764be40.PNG)
![viewlowquantity](https://user-images.githubusercontent.com/21042727/41106408-9725ca08-6a35-11e8-859d-58b248a62c76.PNG)
![viewproductschoice](https://user-images.githubusercontent.com/21042727/41106414-98036f20-6a35-11e8-8b58-0216824bcc7e.PNG)


 

Contributors
Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

License
A short snippet describing the license (MIT, Apache, etc.)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
# Bamazon
Amazon-like storefront with MySQL skills
Node.js & MySQL


Overview

In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.


Submission Guide

Make sure you use the normal GitHub. Because this is a CLI App, there will be no need to deploy it to Heroku. This time, though, you need to include screenshots, a gif, and/or a video showing us that you got the app working with no bugs. You can include these screenshots or a link to a video in a README.md file.


Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).
Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works. 
Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.


If you haven't written a markdown file yet, click here for a rundown, or just take a look at the raw file of these instructions.


Submission on BCS


Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!



Instructions


Challenge #1: Customer View (Minimum Requirement)


Create a MySQL Database called bamazon.
Then create a Table inside of that database called products.
The products table should have each of the following columns:



item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)



Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.



The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.



Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.



If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



However, if your store does have enough of the product, you should fulfill the customer's order.


This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.







If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.





Challenge #2: Manager View (Next Level)



Create a new Node application called bamazonManager.js. Running this application will:


List a set of menu options:
View Products for Sale
View Low Inventory
Add to Inventory
Add New Product
If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.







If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.





Challenge #3: Supervisor View (Final Level)


Create a new MySQL table called departments. Your table should include the following columns:



department_id
department_name
over_head_costs (A dummy number you set for each department)



Modify the products table so that there's a product_sales column and modify the bamazonCustomer.js app so that this value is updated with each individual products total revenue from each sale.
Modify your bamazonCustomer.js app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.



Make sure your app still updates the inventory listed in the products column.



Create another Node app called bamazonSupervisor.js. Running this application will list a set of menu options:



View Product Sales by Department
Create New Department



When a supervisor selects View Product Sales by Department, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.





department_id
department_name
over_head_costs
product_sales
total_profit




01
Electronics
10000
20000
10000


02
Clothing
60000
100000
40000





The total_profit column should be calculated on the fly using the difference between over_head_costs and product_sales. total_profit should not be stored in any database. You should use a custom alias.
If you can't get the table to display properly after a few hours, then feel free to go back and just add total_profit to the departments table.



Hint: You may need to look into aliases in MySQL.
Hint: You may need to look into GROUP BYs.
Hint: You may need to look into JOINS.
HINT: There may be an NPM package that can log the table to the console. What is it? Good question :)



Reminder: Submission on BCS


Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!





Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.




Create a README.md

Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:


About READMEs
Mastering Markdown





Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.




One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

Good Luck!

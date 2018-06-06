/*I added in the quantity even though I could remove because I wanted to see if it worked.*/
const mysql = require("mysql");
const inquirer = require('inquirer');

var stockQuantity = 0;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Martel83",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id", connection.threadId + "\n");
    // start();
    prompter();
});

/*Created a start function that pulls in all the items based on quantity > 0 */
function start() {
    console.log("******************************-Hello, Welcome to Bamazon!-***********************************");
    connection.query("SELECT * FROM products WHERE stock_quantity >= 0 ORDER BY department_name;", function (err, results) {
        if (err) throw err;
        for (let i = 0; i < results.length; i++) {
            console.log("_________________________________________________________________________________________");
            console.log("ID#:", results[i].item_id, "\n", "\tproduct name:", results[i].product_name, "\t", "price:",
                results[i].price, "\t", "quantity:", results[i].stock_quantity);
        }
        console.log("");
        console.log("*********************************************************************************************");
        setTimeout(prompter, 1500);
    });
}
/*The app should then prompt users with two messages. Then depending on the response from user, it checks on the quanity first then move to function */
function prompter() {
    inquirer.prompt([{
        type: "list",
        name: "userInput",
        message: "Choose from available choices below:",
        choices: ["View Products", "View Low-Inventory", "Add to Inventory", "Add New Products"]
    }]).then(function (answer) {
        console.log(answer.userInput, "choice");
        switch (answer.userInput) {
            case "View Products":
                listItems();
                break;
            case "View Low-Inventory":
                lowInventory();
                break;
            case "Add to Inventory":
                addQty();
                break;
            case "Add New Products":
                addItem();
                break;
            default:
                "fail"
        }
    });
}
//Check if quantity is avaiable. Make query call by item_id to see if any results have 0 quantity. 
//If the items are in stock then call math function.  
function listItems() {
    connection.query("SELECT * FROM products;", function (err, results) {
        if (err) throw err;
        console.log("***********************************INVENTORY******************************************");
        for (let i = 0; i < results.length; i++) {
            console.log("_________________________________________________________________________________________");
            console.log("ID#:", results[i].item_id, "\n", "\tproduct name:", results[i].product_name, "\t", "price:",
                results[i].price, "\t", "quantity:", results[i].stock_quantity);
        }
        console.log("");
        console.log("*********************************************************************************************");
        inquirer.prompt([{
            type: "list",
            name: "userInput",
            message: "Choose from available choices below:",
            choices: ["<--Back"]
        }]).then(function (answer) {
            if (answer.userInput) {
                prompter();
            }
        })
    });
}
function addQty() {
    inquirer.prompt([{
        type: "list",
        message: "Choose Department",
        name: "qtyDept",
        choices: ["Clothing", "Electronics", "Food", "Kitchen", "Sporting Goods"]

    }]).then(function (answer) {
        let deptN = answer.qtyDept;
        connection.query("SELECT * FROM products WHERE ?", [{
                department_name: deptN
            }],
            function (err, results) {
                if (err) throw err;
                console.log("**********************************_INVENTORY_******************************************");
                for (let i = 0; i < results.length; i++) {
                    console.log("_________________________________________________________________________________________");
                    console.log("ID#:", results[i].item_id, "\n", "\tproduct name:", results[i].product_name, "\t",
                        "quantity:", results[i].stock_quantity);
                }
                prodID(results);
            });
    });
}

function prodID(results) {
    console.log('');
    inquirer.prompt([{
        type: "input",
        message: "Choose Product ID# to add to stock:",
        name: "prdID"
    }, {
        type: "input",
        message: "How many unit(s) to add?",
        name: "prdUnits"
    }]).then(function (answer) {
        for(var i =0; i< results.length; i++) {
            if(results[i].item_id == answer.prdID) {
                let units = results[i].stock_quantity;
                let sumQuantity = (units + parseFloat(answer.prdUnits));
                let id = parseFloat(answer.prdID);
                updatingStock(sumQuantity, id);
                break;
            }
        }
    })
}

function updatingStock(sum, id) {
    connection.query("UPDATE products SET ? WHERE ?", 
        [{
            stock_quantity: sum
        },{
            item_id: id
        }],
        function (err, results) {
            if (err) throw err;
            console.log("--Adjustment was successful!--")
            prompter();
        })
}


function lowInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity < 5 ORDER BY department_name", function (err, results) {
        if (err) throw err;
        console.log("***********************************LOW-INVENTORY******************************************");
        for (let i = 0; i < results.length; i++) {
            console.log("_________________________________________________________________________________________");
            console.log("ID#:", results[i].item_id, "\n", "\tproduct name:", results[i].product_name, "\t", "price:",
                results[i].price, "\t", "quantity:", results[i].stock_quantity);
        }
        console.log("");
        console.log("*********************************************************************************************");
        inquirer.prompt([{
            type: "list",
            name: "userInput",
            message: "Choose from available choices below:",
            choices: ["<--Back"]
        }]).then(function (answer) {
            if (answer.userInput) {
                prompter();
            }
        })
    })
}


//add new product
function addItem() {

    inquirer.prompt([
     {
        type: "input",
        name: "pName",
        message: "New product name?"

     },{
         type: "input",
         name: "dName",
         message: "Department name?"

     },{ 
         type: "input",
         name: "price",
         message: "Price of item?"

     },{
        type: "input",
        name: "qty",
        message: "How many to add?"  
    }]).then(function (answer) {
        let prodName = answer.pName;
        let deptName = answer.dName;
        let priceAdd = answer.price;
        let qtyAdd = answer.qty;
        insertNewItem(prodName, deptName, priceAdd, qtyAdd);
    })
 }

 function insertNewItem(prodName, deptName, priceAdd, qtyAdd){
     connection.query(
      "INSERT INTO products SET ?",
      {
        product_name: prodName,
        department_name: deptName,
        price: priceAdd, 
       stock_quantity: qtyAdd
      }
    ); 
    console.log("______________________________");
    console.log("--Item was successfully added--");
    console.log("______________________________");
    console.log("Returning to main menu in 3 seconds");
    setTimeout(prompter, 3000);
}  
 



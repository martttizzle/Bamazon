const mysql = require("mysql");
const inquirer = require('inquirer');

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
    start();
});

/*Created a start fucntion that pulls in all the items based on quantity > 0*/
function start() {
    console.log("Hello, Welcome to Bamazon!");
    console.log("*********************************************************");
    connection.query("SELECT * FROM products WHERE stock_quantity > 0 ORDER BY department_name;", function (err, results) {
        if (err) throw err;
        for (let i = 0; i < results.length; i++) {
            console.log("Product_ID:", results[i].item_id, " ", "Product_Name:", results[i].product_name, " ", " ", " Price: ", results[i].price);
        }
        console.log("*********************************************************");
        console.log("");
        setTimeout(prompter, 2000);
    });
}





/*The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.*/

function prompter() {
    inquirer
        .prompt([{
                name: "id",
                type: "input",
                message: "Please enter ID(number) of product you would like to purchase:"
            },
            {
                name: "quantity",
                type: "input",
                message: "Please enter how many units(quantity) to purchase?"
            }
        ]).then(function (answer) {
            var qty = parseFloat(answer.quantity);
            var id = parseFloat(answer.id);
            // based on their answer, checks to see if NAN or not then sends to quantity-
            if (!isNaN(qty) && !isNaN(id)) {
                checkQTY(qty, id);
            } else {
                console.log("Please enter numeric value only! Re-enter!");
                prompter();
            }
        });
}
//Check if quantity is avaiable. Make query call by item_id to see if any results have 0 quantity. 
function checkQTY(qty, id) {

    connection.query("SELECT * FROM products WHERE stock_quantity = 0 ORDER BY department_name;", function (err, results) {
        if (err) throw err;
        for (let i = 0; i < results.length; i++) {
            if (id == results[i].item_id) {
                let a = results[i].item_id;
                console.log("**+**We are out-of-stock today, sorry try again.**+**");
                prompter();
                break;
            } 
                else {
                updateTable();
            }
        }
    });
}
    function updateTable() {
        console.log("hello");
    }
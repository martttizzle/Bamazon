/*I added in the quantity even though I could remove because I wanted to see if it worked.*/
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
    inquirer
        .prompt([{
                name: "id",
                type: "input",
                message: "Please enter ID# of product you would like to purchase:"
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
//If the items are in stock then call math function.  
function checkQTY(qty, id) {
    connection.query("SELECT * FROM products WHERE stock_quantity = 0 ORDER BY department_name;", function (err, results) {
        if (err) throw err;
        let qtyYes = false;
        for (let i = 0; i < results.length; i++) {
            if (id == results[i].item_id) {
                qtyYes = true;
                console.log("*********We are out-of-stock today, sorry try again in a few days!.*********");
                prompter();
                break;
            }
        }
        if (qtyYes === false) {
            qtyMath(qty, id);
        }
    });
}
//Calculates the Math for qty and price and sends results to updateTable function. if the user enters 
//more than quantity available it start back(recursion)
function qtyMath(qty, id) {
    var tst = connection.query(
        "SELECT * FROM products WHERE ?", [{
            item_id: id
        }],
        function (err, res) {
            let qtyLeft = (res[0].stock_quantity - qty);
            let total = (res[0].price * qty);
            if (qtyLeft < 0) {
                console.log("***quantity exceeds stock available, please try again!***");
                start();
            } else {
                updateTable(qtyLeft, id, total);
            }
        });
}
//updateTable takes in the values from qtyMath and updates table
function updateTable(qty, id, total) {
    total = total.toFixed(2);
    var query = connection.query(
        "UPDATE products SET ? WHERE ?", [{
                stock_quantity: qty
            },
            {
                item_id: id
            }
        ],
        //prints out total sale then after 5 seconds starts back Bamazon.
        function (err, res) {
            console.log("Updating, one moment please!...\n");
            console.log("***$", total, "Total Sale***");
            setTimeout(start, 5000);
        }
    );
}
var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Martel83",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id", connection.threadId + "\n");
    start();
});

/*Created a start fucntion that pulls in all the items based on quantity > 0*/
function start() {
    connection.query("SELECT * FROM products WHERE stock_quantity > 0 ORDER BY department_name;", function(err, results) {
        if (err) throw err;
    for (let i = 0; i< results.length; i++) {
        console.log("Product_ID:",results[i].item_id," ","Product_Name:",results[i].product_name," "," "," Price: ",results[i].price);
    }
});
}

 function prompter() {
    inquirer
      .prompt({
        name: "postOrBid",
        type: "rawlist",
        message: "Would you like to [POST] an auction or [BID] on an //auction?",
        choices: ["POST", "BID"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid.toUpperCase() === "POST") {
          postAuction();
        }
        else {
          bidAuction();
        }
      });


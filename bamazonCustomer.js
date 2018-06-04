var mysql = require("mysql");

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
    //createProduct();
});

function createProduct() {
    console.log("Inserting a new product");
    var query = connection.query(
        
    )
}
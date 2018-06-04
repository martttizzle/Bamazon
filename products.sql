DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  item_id INT  NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(60) NOT NULL,
  department_name VARCHAR(60) NOT NULL,
  price INT NOT NULL,
  stock_quantity VARCHAR(60) NOT NULL,
  PRIMARY KEY (item_id)
);


SELECT * FROM products;

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (1, 'LED-Lamp', 'Electronics', 67.30, 50),(1, 'sleepingbag', 'Sporting Goods', 100.30, 42),(1, 'sleepingbag', 'Sporting Goods', 100.30, 42),(),(),(),(),(),(),(),(),();
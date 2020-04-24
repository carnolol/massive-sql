INSERT INTO products
(product_name, price)
VALUES
($1, $2)
returning *;
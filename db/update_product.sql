UPDATE products
SET product_name = $2, price = $3
WHERE id = $1
returning *;
module.exports = {
  createProduct: async (req, res) => {
    const db = req.app.get('db');
    const {productName, price} = req.body;
    const newProduct = await db.create_product([productName, price])
    if(newProduct){
    res.status(200).send(newProduct)
    } else {
      return res.status(500).send('OOPS something went wrong...')
    }
  },
  getProducts: async (req, res) => {
    const db = req.app.get('db');
    const products = await db.get_products()
    res.status(200).send(products)
  },
  updateProduct: async (req, res) => {
    const db = req.app.get('db');
    const {productId} = req.params
    const {productName, price} = req.body
    const updatedProduct = await db.update_product([productId, productName, price])
    if(updatedProduct){
      res.status(200).send(updatedProduct)
    } else {
      res.status(500).send('Updating product failed')
    }
  },
  deleteProduct: async (req, res) => {
    const db = req.app.get('db');
    const {productId} = req.params
    const deleteProduct = await db.delete_product([productId])
    if(deleteProduct){
      res.status(200).send('Product Deleted!')
    } 
  },
}
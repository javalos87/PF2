import { productsModel } from "../models/products.js";

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct = async (product) => {
    try {
      await productsModel.create(product);
    } catch (error) {
      console.log(error.message);
    }
  };

  getProducts = async (limit) => {
    try {
      if (limit) {
        const prodsLimit = await productsModel.find().lean().limit(limit);
        return prodsLimit;
      }

      const getProducts = await productsModel.find().lean();
      return getProducts;
    } catch (error) {
      console.log(error.message);
    }
  };

  deleteProduct = async (id) => {
    try {
      return await productsModel.deleteOne({ _id: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  updateProduct = async (id, product) => {
    const { title, description, code, price, stock, category, thumbnails } =
      product;
    try {
      return await productsModel.updateOne(
        { _id: id },
        {
          title: title,
          description: description,
          code: code,
          price: price,
          stock: stock,
          category: category,
          thumbnails: thumbnails,
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  getProductById = async (id) => {
    try {
      const product = productsModel.findOne({ _id: id });
      return product;
    } catch (error) {
      console.log(error.message);
    }
  };
}

export default ProductManager;

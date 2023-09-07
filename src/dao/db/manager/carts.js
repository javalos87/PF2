import { cartsModel } from "../models/carts.js";

export default class Carts {
  constructor() {}

  getAll = async () => {
    try {
      const carts = await cartsModel.find();
      return carts.map((cart) => cart.toObject());
    } catch (error) {
      return console.log(error.message);
    }
  };
  getById = async (id) => {
    try {
      const cart = await cartsModel.findOne({ _id: id });
      return cart;
    } catch (error) {
      return console.log(error.message);
    }
  };
  saveCart = async (cart) => {
    try {
      const result = await cartsModel.create(cart);
      return result;
    } catch (error) {
      return console.log(error.message);
    }
  };
  addProductCart = async (cid, pid) => {
    try {
      const result = await cartsModel.findOne({ _id: cid });
      const exist = result.products.find((e) => e.id == pid);

      if (!exist) {
        let product = { id: pid, quantity: 1 };
        await cartsModel.updateOne(
          { _id: cid },
          { $push: { products: product } }
        );
      } else {
        await cartsModel.updateOne(
          { _id: cid, "products.id": pid },
          { $inc: { "products.$.quantity": 1 } }
        );
      }
      return result;
    } catch (error) {
      return console.log(error.message);
    }
  };
}

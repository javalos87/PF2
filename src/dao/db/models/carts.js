import mongoose from "mongoose";
const cartsCollection = "Carts";
const cartsSchema = new mongoose.Schema({
  products: {
    type: Array,
    default: [],
  },
});

export const cartsModel = mongoose.model(cartsCollection, cartsSchema);

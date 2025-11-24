import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    sku: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    status: {
      type: String,
      enum: ["in_stock", "out_of_stock"],
      default: "in_stock",
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;

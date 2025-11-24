import Item from "../models/Items.js";

const getItems = async (req, res) => {
  const items = await Item.find();
  res.status(200).json({ items });
};

export { getItems };

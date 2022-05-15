const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
  expDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  owner: {
/*     type: mongoose.Types.ObjectId,
    ref: "user",
    required: true, */
    type: String,
    required: true,
  },
/*   image: {
    imageURL: {
      type: String,
    },
    public_id: {
      type: String,
    },
  }, */
});
module.exports = mongoose.model("product", productSchema);

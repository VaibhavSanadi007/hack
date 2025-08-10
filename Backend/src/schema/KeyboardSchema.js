import mongoose from "mongoose";

const keyboardSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  img1: {
    type: String,
  },
  img2: {
    type: String,
  },
  img3: {
    type: String,
  },
  img4: {
    type: String,
  },
  descriptionImg1: {
    type: String,
  },
   descriptionImg2: {
    type: String,
  },
  descriptionImg3: {
    type: String,
  },
  descriptionImg4: {
    type: String,
  }
})

export default mongoose.model('Keyboardmodel',keyboardSchema);
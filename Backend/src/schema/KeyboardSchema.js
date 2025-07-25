import mongoose from "mongoose";

const keyboardSchema = mongoose.Schema({
  KeyboardEventname: {
    type: String,
  },
  keyboarddpi: {
    type: Number,
  },
  minPay: {
    type: Number,
  },
  maxPay: {
    type: Number,
  },
  keyboardImg1: {
    type: String,
  },
  keyboardImg2: {
    type: String,
  },
  keyboardImg3: {
    type: String,
  },
  keyboardImg4: {
    type: String,
  },
  keyboardimg1otherVariant: {
    type: String,
  },
  keyboardimg2otherVariant: {
    type: String,
  },
  keyboardimg3otherVariant: {
    type: String,
  },
  keyboardimg4otherVariant: {
    type: String,
  },
  DescriptionImg1: {
    type: String,
  },
   DescriptionImg2: {
    type: String,
  },
  DescriptionImg3: {
    type: String,
  },
  DescriptionImg4: {
    type: String,
  }
})

export default mongoose.model('Keyboardmodel',keyboardSchema);
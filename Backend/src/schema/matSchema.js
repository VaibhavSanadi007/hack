import mongoose from "mongoose";

const matSchema = mongoose.Schema({
  matname: {
    type: String,
  },
  minPay: {
    type: Number,
  },
  maxPay: {
    type: Number,
  },
  matImg1: {
    type: String,
  },
  matImg2: {
    type: String,
  },
  matImg3: {
    type: String,
  },
  matImg4: {
    type: String,
  },
  matimg1otherVariant: {
    type: String,
  },
  matimg2otherVariant: {
    type: String,
  },
  matimg3otherVariant: {
    type: String,
  },
  matimg4otherVariant: {
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

export default mongoose.model('Matmodel',matSchema);
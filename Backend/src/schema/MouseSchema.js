import mongoose from "mongoose";

const mouseSchema = mongoose.Schema({
  mousename: {
    type: String,
  },
  mousedpi: {
    type: Number,
  },
  minPay: {
    type: Number,
  },
  maxPay: {
    type: Number,
  },
  mouseImg1: {
    type: String,
  },
  mouseImg2: {
    type: String,
  },
  mouseImg3: {
    type: String,
  },
  mouseImg4: {
    type: String,
  },
  mouseimg1otherVariant: {
    type: String,
  },
  mouseimg2otherVariant: {
    type: String,
  },
  mouseimg3otherVariant: {
    type: String,
  },
  mouseimg4otherVariant: {
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

export default mongoose.model('Mousemodel',mouseSchema);
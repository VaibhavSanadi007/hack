import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreasebyid, removeItem, updatebyid } from "../../store/CartSlice";

const Cart = () => {
  const cartItems = useSelector((item) => item.cart.value);
  console.log(cartItems)
  const dispatch = useDispatch();
  let sum = 0;
  const calculatesubtotal = () => {
    cartItems.forEach((element) => {
      sum += element.total;
    });
    return sum;
  };
  calculatesubtotal();

  const decrement = (_id) => {
   dispatch(decreasebyid(_id))
  };

  const increment = (_id) => {
      dispatch(updatebyid(_id))
  };

  const deleteItem = (_id)=>{
    dispatch(removeItem(_id));
  }

  return (
    <div className="w-full h-fit flex flex-col xl:gap-10 text-neutral-950">
      <h1 className="text-center xl:text-5xl text-neutral-500">
        Your Shopping Cart
      </h1>
      <div className=" h-full w-full flex  xl:gap-5">
        <div
          id="itemsWalaDiv"
          className="bg-white w-[70%] xl:h-fit   xl:px-5 xl:py-2 rounded-2xl overflow-hidden"
        >
          <div className="w-full  grid grid-cols-6 xl:pb-4 xl:pt-2 ">
            <h1 className=" text-center ">Product</h1>
            <h1 className=" text-center ">product name</h1>
            <h1 className=" text-center ">price</h1>
            <h1 className=" text-center ">quantity</h1>
            <h1 className=" text-center ">total</h1>
            <h1 className=" text-center ">remove item</h1>
          </div>
          {cartItems.length==0?<h1 className="text-center py-30">Cart is Empty!</h1>:cartItems.map((item, index) => (
            <div
              className="w-full grid grid-cols-6 text-neutral-500"
              key={index}
            >
              <img className="xl:h-20 xl:w-20" src={item.img1} />
              <h1 className="text-center flex items-center justify-center ">{item.name}</h1>
              <h1 className="text-center flex items-center justify-center ">{item.price}</h1>
              <div className="flex items-center justify-center xl:h-fit  xl:py-6">
                <button className="px-3   transition " onClick={()=>decrement(item._id)}>
                  -
                </button>
                <h1 className="text-center ">{item.quantity}</h1>
                <button className="px-3  transition" onClick={()=>increment(item._id)}> 
                  +
                </button>
              </div>
              <h1 className="text-center flex items-center justify-center">{item.total}</h1>
              <button className="text-center flex items-center justify-center" onClick={()=>deleteItem(item._id)}>X</button>
            </div>
          ))}
        </div>
        <div
          id="ordersummary"
          className="bg-white   xl:h-1/2  xl:w-[28%] rounded-2xl xl:py-3 xl:px-6 flex flex-col  justify-evenly"
        >
          <h1 className="text-center">Order Summary</h1>
          <div className="flex justify-between ">
            <h1>SubTotal </h1>
            <h1> &#8377; {sum}</h1>
          </div>
          <div className="flex justify-between ">
            <h1>Delivery Fee </h1>
            <h1> &#8377; 50</h1>
          </div>
          <div className="flex justify-between ">
            <h1>Total Fee </h1>
            <h1> &#8377; {sum===0?0:sum + 50}</h1>
          </div>
          <button className="xl:py-4  bg-neutral-900 text-neutral-300 xl:rounded-2xl cursor-pointer active:scale-95">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

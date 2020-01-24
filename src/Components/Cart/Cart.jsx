import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { selectCart, productActions } from "../../redux/ProductsSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import NoticePage from "../Others/NoticePage";
import PaystackPop from "@paystack/inline-js";
import Alert from "../Others/Alert";

const Cart = () => {
  const products = useSelector((state) => selectCart(state));

  const user = useSelector((state) => state.products.user);
  const [showAlert, setShowAlert] = useState(false)



  const total = products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function payment() {
    const paystack = new PaystackPop();

  if(user.displayName){
    paystack.newTransaction({
      key: "pk_test_e4544a7444dbdb6521239462322053580a10dabf",
      amount: (total * 400) * 100,
      email: user.email,
      name:user.displayName,
    });
  } else{
   setShowAlert(true)

   setTimeout(()=>setShowAlert(false), 3000)
  }
  }

  return (
    <>
    {showAlert && <Alert error={true}>Please, signin to make payment</Alert>}
      {products && total > 0? (
        <div className="p-4 lg:px-12 mt-24">
          <h1>Cart</h1>

          <div className="flex flex-col lg:flex-row justify-between lg:h-fit text-orange-900 ">
            <div>
              {products.map((item) => {
                return <Prod product={item} key={item.id} />;
              })}
            </div>
            <div className=" text-black w-full lg:w-1/2 mt-4 lg:mt-0">
              {" "}
              <p className="text-center text-lg pb-4 flex justify-between">
                <span> Total:</span>₦{total * 400}
              </p>
              <p
                className=" border text-orange-100 mt-4 bg-orange-900 text-center text-lg p-4 cursor-pointer"
                onClick={payment}
              >
                Buy With Paystack
              </p>
              <p className=" border border-orange-900  mt-4 text-center text-lg p-4 cursor-pointer">
                Buy Online - Pickup in store
              </p>
            </div>
          </div>
        </div>
      ) : (
        <NoticePage>No item in cart...</NoticePage>
      )}
    </>
  );
};

export default Cart;

const Prod = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      {
        <div className="flex  w-full lg:w-[30em]  mb-12 shadow-sm shadow-orange-200">
          <img
            src={product.image}
            alt={product.title}
            className="block w-24 h-[7.5em]  "
          />

          <div className="px-5 flex flex-col justify-between  w-full">
            <div>
              {" "}
              <p className="text-sm">{product.title}</p>
              <p className=" text-sm mt-2">
                <span className="font-bold">Size: </span> <span>{"XL"}</span>
              </p>
            </div>

            <div className="text-sm flex justify-between">
              <div>
                <p className="border border-orange-900 flex justify-between p-1 cursor-pointer w-20">
                  <span
                    onClick={() => {
                      if (product.quantity > 1)
                        dispatch(
                          productActions.changeQuantity({
                            id: product.id,
                            type: "decrease",
                          })
                        );
                    }}
                  >
                    <FaMinus />
                  </span>{" "}
                  {product.quantity}
                  <span
                    onClick={() =>
                      dispatch(
                        productActions.changeQuantity({
                          id: product.id,
                          type: "increase",
                        })
                      )
                    }
                  >
                    <FaPlus />
                  </span>
                </p>
                <p
                  className="mt-2 py-2 text-red-500 cursor-pointer"
                  onClick={() =>
                    dispatch(productActions.removeFromCart(product.id))
                  }
                >
                  remove
                </p>
              </div>

              <p>₦{product.price * 400}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

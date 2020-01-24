import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";

const PaystackInt = ({ amount }) => {
  const [data, setData] = useState({});
  console.log(amount);

  function handleChange(e) {
    const name = e.name;
    const value = e.value;
    setData((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  }

  function payment(e) {
    e.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: import.meta.env.VITE_PUBLISH_KEY,
      amount: amount * 100,
      email: data.email,
      name: data.fullName,
      onSuccess(transaction) {
        alert(`payment complete! ${transaction.reference}`);
      },
      onCancel() {
        alert("trans cancelled");
      },
    });
  }

  return (
    <form
      className="m-auto lg:h-96 text-center p-3 pt-32 lg:pt-40 lg:flex  justify-around items-center"
      onSubmit={payment}
    >

      <h3 className="text-orange-900 mb-12">Personal Informations:</h3>
      <div>
        <label className="text-orange-900" htmlFor="fullName">Full Name:</label>
        <input
          type="text"
      
          className="block outline-none text-orange-900 placeholder:text-orange-200 placeholder:italic bg-orange-100 border border-orange-900 rounded-lg m-auto p-1 px-3 text-base  my-2 "
       name="fullName"
          value={data.fullName || ""}
          onChange={(e) => handleChange(e.target)}
        />
      </div>
      <div>
        <label className="text-orange-900" htmlFor="email">Email:</label>
        <input
          type="text"
        
          className="block outline-none text-orange-900 placeholder:text-orange-200 placeholder:italic bg-orange-100 border border-orange-900 rounded-lg m-auto p-1 px-3 text-base  my-2 "
       name="email"
          value={data.email || ""}
          onChange={(e) => handleChange(e.target)}
        />
      </div>
      <div>
        <label className="text-orange-900" htmlFor="amount">Amount:</label>

        <input
          type="number"
          
          className="block outline-none text-orange-900 placeholder:text-orange-200 placeholder:italic bg-orange-100 border border-orange-900 rounded-lg m-auto p-1 px-3 text-base  my-2  focuoutline-none"
          name="amount"
          value={amount}
          readOnly
        />
      </div>{" "}

      <div>
      <button type="submit" className="mt-3 p-2 w-32 text-base bg-orange-900 rounded-lg  text-orange-100">
        PAY
      </button>
      </div>
    </form>
  );
};

export default PaystackInt;

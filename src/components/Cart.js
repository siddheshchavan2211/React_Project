import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Store from "../../Utils/Store";
import Itemscart from "./Itemscart";
import { clearcart } from "../../Utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((Store) => Store.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const dispatch = useDispatch();
  const clearitems = () => {
    dispatch(clearcart());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between">
        {" "}
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <button
          className="p-2 bg-red-100 rounded m-2"
          onClick={() => clearitems()}
        >
          clear All
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cartItems.map((item) => (
              <Itemscart key={item.id} {...item} />
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Total:</h2>
            <p className="text-xl font-semibold">${totalPrice}</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { useDispatch } from "react-redux";
import { removeitem } from "../../Utils/CartSlice";

const Itemscart = ({ id, title, images, price }) => {
  const dispatch = useDispatch();
  const Removeitem = () => {
    dispatch(removeitem());
  };
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        <div className="flex items-center">
          <img
            src={images}
            alt={title}
            className="w-20 h-20 object-cover mr-4"
          />
          <span>{title}</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ${price}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ${price} {/* Assuming quantity is 1 for now */}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
        <button
          className="text-red-600 hover:text-red-800"
          onClick={() => {
            Removeitem();
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Itemscart;

// import { useContext } from "react";
// import userContext from "../../Utils/userContext";
// const Itemscart = ({ images, title, category, price }) => {
//   //   const { user } = useContext(userContext);
//   return (
//     <div className="">
//       <img alt="logo" className="w-full h-40 object-contain" src={images} />
//       <div className="p-4">
//         <h2 className="text-lg font-bold text-gray-800">{title}</h2>
//         <h3 className="text-sm text-gray-600">{category}</h3>
//         <h4 className="text-xl font-semibold text-purple-500 mt-2">
//           {price} $
//         </h4>
//         <h6 className="text-xl font-semibold text-purple-500 ">hello</h6>
//       </div>
//     </div>
//   );
// };

// export default Itemscart;

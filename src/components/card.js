import { useContext } from "react";
import userContext from "../../Utils/userContext";
const Cards = (props) => {
  const { user } = useContext(userContext);
  return (
    <div className="">
      <img
        alt="logo"
        className="w-full h-40 object-contain"
        src={props.images}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{props.title}</h2>
        <h3 className="text-sm text-gray-600">{props.category}</h3>
        <h4 className="text-xl font-semibold text-purple-500 mt-2">
          {props.price} $
        </h4>
        <h6 className="text-xl font-semibold text-purple-500 ">
          {user.name}-{user.email}
        </h6>
      </div>
    </div>
  );
};

export default Cards;

import { useState, useEffect } from "react";
import Cards from "./card";
import Shimmer from "./Shimmer";
import { json, Link } from "react-router-dom";
import { filterfunction } from "../../Utils/helper";
import useOnline from "../../Utils/useOnline";
import { DummyApi } from "../constants";
import { useContext } from "react";
import UserContext from "../../Utils/userContext";
import { addtocart } from "../../Utils/CartSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  let [filtersearch, setNewFilterSearch] = useState([]);
  let [defaultvalue, setNewDefaultValue] = useState("");
  let [NewallValue, setNewallValue] = useState([]);
  const { user, setiscontext } = useContext(UserContext);
  const dispatch = useDispatch();
  const handleitem = (camera) => {
    dispatch(addtocart(camera));
  };
  useEffect(() => {
    getapicall();
  }, []);

  async function getapicall() {
    const data = await fetch(DummyApi);
    const json = await data.json();
    setNewFilterSearch(json?.products);
    setNewallValue(json?.products);
    // console.log(json);
  }
  let isonline = useOnline();
  if (!isonline) {
    return <h1>You are Offline....</h1>;
  }

  if (!NewallValue) return null;
  return NewallValue?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        type="text"
        className="rounded-md bg-purple-500 px-3.5 py-2.5 placeholder-white text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 my-6"
        placeholder="search"
        value={defaultvalue}
        onChange={(e) => {
          setNewDefaultValue(e.target.value);
        }}
      ></input>
      <button
        className="ml-6 h-11 rounded-lg w-16 bg-purple-500 hover:bg-purple-700 text-white"
        onClick={() => {
          const data = filterfunction(defaultvalue, NewallValue);
          setNewFilterSearch(data);
        }}
      >
        Search
      </button>
      <input
        value={user.name}
        className="ml-5"
        onChange={(e) => {
          setiscontext({
            ...user,
            name: e.target.value,
          });
        }}
      ></input>
      <input
        value={user.email}
        placeholder="email"
        className="ml-5"
        onChange={(e) => {
          setiscontext({
            ...user,
            email: e.target.value,
          });
        }}
      ></input>
      <div className="flex flex-wrap gap-3  justify-center">
        {/* {if(filtersearch) return <h1>No products found</h1>} */}

        {filtersearch.map((camera) => {
          return (
            <div className="flex flex-col bg-white w-56 h-[100%] rounded-lg shadow-lg overflow-hidden justify-center text-center">
              <Link to={"/trackparams/" + camera.id} key={camera.id}>
                <Cards {...camera} />
              </Link>
              <button
                onClick={() => handleitem(camera)}
                className="p-4 m-4 bg-green-100 rounded-full"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Body;

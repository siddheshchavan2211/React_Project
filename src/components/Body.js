import { useState, useEffect } from "react";
import Cards from "./card";
import Shimmer from "./Shimmer";
import { json, Link } from "react-router-dom";

function filterfunction(defaultvalue, filtersearch) {
  return filtersearch.filter((item) =>
    item?.title?.toLowerCase()?.includes(defaultvalue.toLowerCase())
  );
}

const Body = () => {
  let [filtersearch, setNewFilterSearch] = useState([]);
  let [defaultvalue, setNewDefaultValue] = useState("");
  let [NewallValue, setNewallValue] = useState([]);
  useEffect(() => {
    getapicall();
  }, []);
  async function getapicall() {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    setNewFilterSearch(json?.products);
    setNewallValue(json?.products);
    // console.log(json);
  }
  if (!NewallValue) return null;
  return NewallValue?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        type="text"
        className="Searchinput"
        placeholder="search"
        value={defaultvalue}
        onChange={(e) => {
          setNewDefaultValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          const data = filterfunction(defaultvalue, NewallValue);
          setNewFilterSearch(data);
        }}
      >
        Search
      </button>
      <div className="productlist">
        {/* {if(filtersearch) return <h1>No products found</h1>} */}

        {filtersearch.map((camera) => {
          return (
            <Link to={"/trackparams/" + camera.id} key={camera.id}>
              <Cards {...camera} />;
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;

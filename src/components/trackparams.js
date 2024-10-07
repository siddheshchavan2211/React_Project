import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Trackparams = () => {
  const sid = useParams();
  const [reference, setreference] = useState({});

  useEffect(() => {
    Displaydetails();
  }, []);

  async function Displaydetails() {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    console.log(json);
    setreference(json.products[0]);
  }
  return (
    <div className="productdetailss">
      <h1>Track Id:{sid.id}</h1>
      <h2>Title: {reference.title}</h2>
      <img className="img2" src={reference.images} />
      <h2>Price:{reference.price}$</h2>
      <h2>Category:{reference.category}</h2>
      <h2>Description: {reference.description}</h2>

      <h2> Rating: {reference.rating}Stars</h2>
      <h2>In Stock: {reference.stock}</h2>
      <h2>Discount Percentage: {reference.discountPercentage}%</h2>
    </div>
  );
};
export default Trackparams;

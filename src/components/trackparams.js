import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Trackparams = () => {
  const { id } = useParams();
  const [reference, setreference] = useState(null);

  useEffect(() => {
    Displaydetails();
  }, []);

  async function Displaydetails() {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const json = await data.json();
    // console.log(json);
    setreference(json);
  }
  if (!reference) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="productdetailss">
        <h1>Track Id:{id}</h1>
        <h2>Title: {reference.title}</h2>
        {reference.images && reference.images[0] && (
          <img
            className="img2"
            src={reference.images[0]}
            alt={reference.title}
            loading="lazy" // Add lazy loading here
          />
        )}

        <h2>Price:{reference.price}$</h2>
        <h2>Category:{reference.category}</h2>
        <h2>Description: {reference.description}</h2>

        <h2> Rating: {reference.rating}Stars</h2>
        <h2>In Stock: {reference.stock}</h2>
        <h2>Discount Percentage: {reference.discountPercentage}%</h2>
      </div>

      {/* <div className="menu">
        <h1>Menu</h1>
        <ul>
          {Object.values(reference?.products?.description).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
};
export default Trackparams;

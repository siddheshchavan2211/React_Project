import { useParams } from "react-router-dom";
import useApiCall from "../../Utils/useApiCall";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Utils/CartSlice";
const Trackparams = () => {
  const { id } = useParams();
  const reference = useApiCall(id);
  const dispatch = useDispatch();
  const handleitem = (camera) => {
    dispatch(addtocart(camera));
  };
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
            className="img2 w-80"
            src={reference.images[0]}
            alt={reference.title}
            loading="lazy" // Add lazy loading here
          />
        )}
        <button
          className="p-4 m-4 bg-green-100"
          onClick={() => handleitem(camera)}
        >
          Add to Cart
        </button>

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

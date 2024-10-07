import "./Shimmer.css";
const Shimmer = () => {
  return (
    <div className="shimmerui">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="productlist2"></div>
        ))}
    </div>
  );
};

export default Shimmer;

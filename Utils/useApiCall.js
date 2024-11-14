import { useState, useEffect } from "react";
const useApiCall = (id) => {
  const [reference, setreference] = useState(null);

  useEffect(() => {
    Displaydetails();
  }, []);

  async function Displaydetails() {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const json = await data.json();
    //   // console.log(json);
    setreference(json);
  }
  return reference;
};
export default useApiCall;

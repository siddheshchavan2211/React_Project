import { useEffect, useState } from "react";
const useOnline = () => {
  //create use state
  //add useeffect to run only once
  //then add 2 arrow functions one for to check is online or offline
  //add windows fun in it add two events-online,offline
  //then pass status in isonline and then return it from function
  //store the arrow fun in variable to reuse while removinng event listener
  const [isonline, setisonline] = useState(true);
  const Online = () => {
    setisonline(true);
  };
  const Offline = () => {
    setisonline(false);
  };
  useEffect(() => {
    window.addEventListener("online", Online);
    window.addEventListener("offline", Offline);

    return () => {
      window.removeEventListener("online", Online);
      window.removeEventListener("offline", Offline);
    };
  }, []);
  return isonline;
};
export default useOnline;

// import { useState } from "react";

import { useState } from "react";

// const Section = ({ heading, description, istrue, setistrue }) => {
//   // const [istrue, setistrue] = useState(false);
//   return (
//     <>
//       <div className="bg-white p-6 m-6">
//         <h1 className=" font-bold ">{heading}</h1>
//         {istrue ? (
//           <>
//             <button
//               onClick={() => {
//                 setistrue(false);
//               }}
//               className="underline"
//             >
//               Hide
//             </button>
//             <p>{description}</p>
//           </>
//         ) : (
//           <button
//             onClick={() => {
//               setistrue(true);
//             }}
//             className="underline"
//           >
//             Show
//           </button>
//         )}
//       </div>
//     </>
//   );
// };
// //create a use state to config from upper function pass state as parameter and set istrue the new state values
// //create unique key or unique index and pass that as istoggle value to hide one component if w click on show of another
// //now setistrue pass setistoggleinit and with unique id
// //when we only pass direct unique key in set is toggle iti showing but not hiding so we use ternary that when it is 1 then hide and hide then show
// const Instamart = () => {
//   const [isToggle, setisToggle] = useState();
//   return (
//     <>
//       <Section
//         title={1}
//         heading={"About Instamart"}
//         description={
//           " sdidfkdfkdmkfmfkgmkfmgfmgfkmkfmmkmfkgmrovfgkrngvnwrkvkrwmkwe"
//         }
//         istrue={isToggle === 1}
//         setistrue={() => {
//           setisToggle(isToggle === 1 ? 0 : 1);
//         }}
//       />
//       <Section
//         title={2}
//         heading={"Boddy Instamart"}
//         description={
//           " sdidfkdfkdmkfmfkgmkfmgfmgfkmkfmmkmfkgmrovfgkrngvnwrkvkrwmkwe"
//         }
//         istrue={isToggle === 2}
//         setistrue={() => {
//           setisToggle(isToggle === 2 ? 0 : 2);
//         }}
//       />
//       <Section
//         title={3}
//         heading={"End Instamart"}
//         description={
//           " sdidfkdfkdmkfmfkgmkfmgfmgfkmkfmmkmfkgmrovfgkrngvnwrkvkrwmkwe"
//         }
//         istrue={isToggle === 3}
//         setistrue={() => {
//           setisToggle(isToggle === 3 ? 0 : 3);
//         }}
//       />
//     </>
//   );
// };
// export default Instamart;
const Section = ({ heading, description, islive, setislive }) => {
  // const [islive, setislive] = useState(false);
  return (
    <div className=" justify-between items-center w-[92%] bg-white mx-auto  mt-10">
      <h1 className="font-bold text-4xl text-blue-700">{heading}</h1>
      {islive ? (
        <>
          <button
            onClick={() => {
              setislive(false);
            }}
            className="bg-orange-500 underline font-bold p-1 text-white rounded m-3"
          >
            Hide
          </button>
          <p className="text-3xl text-blue-700">{description}</p>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setislive(true);
            }}
            className="bg-orange-500 underline font-bold p-1 text-white rounded m-3"
          >
            Show
          </button>
        </>
      )}
    </div>
  );
};

//pass data thriugh props then create btn to show and hide create hook and asssign it false
//assign onclick to the btn make true in show and false when hide
//now toggle btwn buttons like show only 1 btn
//create same as accordion it should hide when i click anothr show
//to apply it we need to create new hook and pass upeer hooks as parameter and pass this new hooke value as parameter make
//a unique id becz then it can get exact position to show hide btwn compnents
const Instamart = () => {
  const [isconfig, setisconfig] = useState("heading");
  return (
    <>
      <Section
        id={"heading"}
        heading={"Head Instamart"}
        description={
          "escriptionsmfkjdfjsjgjsirgjjrijijijkvdnbirjtngringinvrignringirklnrjnginrinriirnninvrnin"
        }
        islive={isconfig === "heading"}
        setislive={() => {
          setisconfig(isconfig === "heading" ? 0 : "heading");
        }}
      />
      <Section
        id={"body"}
        heading={"body Instamart"}
        description={
          "escriptionsmfkjdfjsjgjsirgjjrijijijkvdnbirjtngringinvrignringirklnrjnginrinriirnninvrnin"
        }
        islive={isconfig === "body"}
        setislive={() => {
          setisconfig(isconfig === "body" ? 0 : "body");
        }}
      />
      <Section
        id={"end"}
        heading={"end Instamart"}
        description={
          "escriptionsmfkjdfjsjgjsirgjjrijijijkvdnbirjtngringinvrignringirklnrjnginrinriirnninvrnin"
        }
        islive={isconfig === "end"}
        setislive={() => {
          setisconfig(isconfig === "end" ? 0 : "end");
        }}
      />
    </>
  );
};

export default Instamart;

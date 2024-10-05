import { useState } from "react";
import {practicelist} from "../constants.js";
const Practices=(props)=>{
    return(   <>
       <h1>{props.name}</h1>
       <h1>{props.email}</h1>
       </>
   )}
   
   function listpractice(studdata,studdata2){
return studdata2.filter((d)=>d.name.includes(studdata))
   
   }
export const The=()=>{
const [studdata, setstuddata]=useState();
const [studdata2, setstuddata2]=useState(practicelist);

   
   return(<>
    <input type="text" value={studdata} onChange={(e)=>{setstuddata(e.target.value)}}></input>
    <button onClick={()=>{
        const om=listpractice(studdata,studdata2);
        setstuddata2(om); 
    }}>Jaddoo</button>
{studdata2.map((ex)=>(
    <Practices{...ex} key={ex.id} />))}
</>);
};
export default Practices;

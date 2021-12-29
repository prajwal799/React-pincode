import React, { useRef, useState } from "react";
import PinItem from "./PinItem";

const onFocus = {
    
    border : "9px solid blue"
}

function PinInput({noOfBoxes = 5 , length =1,onChange,pin}){
   const [values , setValues] = useState(() => 
     new Array(noOfBoxes).fill(""));

     const arr = new Array(noOfBoxes).fill(0);
     const ref = useRef([]);

     const handleChange = (val , index) => {
         values[index] = val;
            setValues([...values]);

        if( val.length === length && index < noOfBoxes - 1){
              ref.current[index + 1].focus();
            }
            
            onChange && onChange(values.join(""));
     };
        
     const handleBackSpace = (val ,index) => {
       let tmp = values[index];
       values[index] = val;
       if(index > 0 && tmp.length === 0){
         ref.current[index-1].focus() ;
       }
       setValues([...values]);
       onChange(values.join(""));
     }

    //  const handlePaste = (e) => {
    //    e.preventdefault();
    //    const pasteValue = e.clipboardData
    //    .getData("text")
    //    .split("")
    //    .filter((a,i) => i < length * noOfBoxes);

    //    pasteValue.forEach((char , index) => {
    //      values[index] = char ; 
    //        ref.current[index].value = char ; 
    //        if(index < noOfBoxes - 1){
    //          ref.current[index + 1].focus();
    //        }
    //        setValues([...values]);
    //        onChange && onChange(values.join(""));
    //    })
    //  }


    //  useEffect(() => {
    //    console.log(ref);

    //  },[values]);

     return (
       <div style={{
         display:"flex",gap:"1rem",justifyContent:"center"
       }} >
         {arr.map((_ , i) => (
           <PinItem  
           key={i}
           ref={(el) => (ref.current[i] = el)}
           handleChange={(v) => handleChange(v ,i)}
           handleBackSpace={(v) => handleBackSpace(v,i)}
           length={length}
           pin={pin}
           />
         ))}
       </div>
     )
};

export default PinInput;
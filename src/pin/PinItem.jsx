import React, { useEffect, useState } from "react"

const PinItem = React.forwardRef(({length , handleChange , handleBackSpace,pin}, ref) => {
    const [isActive , setActive] = useState(false);
     useEffect(() => {
         if(pin.length == 16){
             setActive(true);
         }else {
             setActive(false);
         }
     },[pin])

    const handleKeyUp = (e) => {
      console.log(e.code,"le");
      switch(e.code){
        case "Backspace" : {
      handleBackSpace && handleBackSpace(e.target.value);
        break;
        }
        case "ShiftLeft":
          case "ShiftRight":
            case "Tab":
              case "ArrowUp":
                case "ArrowRight":
                  case "ArrowLeft":
                    case "ArrowDown":
            break;
        default : {
          handleChange(e.target.value);
        }
      }
    }
  return (
   <div>
     <input 
     ref={ref}
     maxLength={length}
     onKeyUp={handleKeyUp}
     style={isActive ? {border : "1px solid green " , width:"2rem",height:"2rem",padding:"0.4rem",color:"green"} 
                 : {border  :"1px solid black" , width:"2rem",height:"2rem",padding:"0.4rem"} }
     />
     </div>
 );
});

export default PinItem;
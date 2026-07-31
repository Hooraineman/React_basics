import { useState } from "react"

function useToggle(initialValue){
   const[ value , setvalue] = useState(initialValue)
   function check(val){
    if(typeof newVal == "Boolean"){
        setvalue(!value)
    }
    else
    {
     setValue(newval)
    }
  }
}
return[value , check]
export default useToggle
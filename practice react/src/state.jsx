//state is a container use dto store data like variable 
// but it re renders the components and data after updation will be visible on UI
// but we have to import states unlike varible they doesn't require to be imported
//state is imported with the help of hook {useState}
import {useState} from 'react'

function AboutState() {
    const [fruit,setFruit] = useState("Apple")
    function updation(){
        setFruit("banana")
    }
  return (
    <>
      <h1>{fruit}</h1>
      <button onClick={updation}>change fruit</button>
    </>
  )
}

export default AboutState

export function Counter(){
   const [count,setCount]=useState(0)
   function countUpdate(){
    setCount(count + 1)
   }
  return(
      <div>
        <h1>Counter:{count}</h1>
        <button onClick={countUpdate}>click to increase the value</button>
      </div>
  )
}
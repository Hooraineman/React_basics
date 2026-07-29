import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
  let [value , setvalue] = useState(15) 
  // these can be any first on eis varibale and secod a function to handle  that variable // it is a hook which will control variables on ui 
  
  const AddValue = () =>{
    counter = counter + 1
      setvalue(counter)
  }

  const RemoveValue = () =>{
    counter = counter - 1
      setvalue(counter) 
  }

  return (
    <>
      <h1>" Counter " Click to add and remove value</h1>
    <button onClick={AddValue}>Add value {counter}</button><br/>
    <button onClick={RemoveValue} >Remove Value {counter}</button>
    </>
  )
}
export default App

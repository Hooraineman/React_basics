import { useState, useCallback,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
   const [length , setLength] = useState(7)
  const [char , setChar] = useState(false)
  const [num, setNum] = useState(false)
  const [password, setPass] = useState("")

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
 //useCallback hook for executing func for different dpendencencs
  //const useCallback [{funct} , dependences]
  // used for optimization it call the function inside it when the dependences are changed and reurns a memorized func
  const passwordGenerator = useCallback(() => {
   let pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if(num){
    str += "0123456789"
   }
   if(char){
    str += "!@#$%^&*()_"
   }
   for (let i = 0; i < length; i++) {
     const idx = Math.floor(Math.random() * str.length)
     pass += str.charAt(idx)
   }
   setPass(pass)
  }, [length, num, char ,setPass ])
  //useEffect take one callback and dependences
  //runs func inside it whenever the page renders first time or dependences r changed
  useEffect(()=>{
    passwordGenerator()
  },[length, num, char,passwordGenerator()])
  //useRef used to give reefrence of selected components in our page so that func can be perfomred on ref value 
  const passwordRef = useRef(null)
  return (
    <>
    <h1>password generator</h1>
      <div>
        <input
        type='text'
        value={password}
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
      </div>
        <button onClick={copyToClipboard}>Copy</button>
      <div>
        <div>
          <input
          type='range'
          min={7}
          max={20}
          value={length}
          onChange={(e)=>{setLength(Number(e.target.value))}}
          />
          <label>length:{length}</label>
        </div>
      <input
      type='checkbox'
      checked={num}
      id='numberinput'
      onChange={()=>{setNum(prev=>!prev)}}
      />
      <label>numberInput</label>
      <input
      type='checkbox'
      checked={char}
      id='charinput'
      onChange={()=>{setChar(prev=>!prev)}}
      />
      <label>charInput</label>
      </div>
    </>
  )
}
export default App

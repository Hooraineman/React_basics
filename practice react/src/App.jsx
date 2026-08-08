import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import User from './User.jsx'
import Prop from './Props_2'
import Style from './Styling'

// if we have way more details then we cant do it like this it looks messsy
// then we can put all details in a object then pass that to the component 
function App(){
   let MyObject = {
    name : "hoorain",
    age : "20",
    seconname :"eman"
   }

   // for array
   let arr =['uet','hd']
  //let age = 18 
    return(
        <>
        <h1>props in react</h1>
        {/*<User name="hoorain" age={age}/>*/}
        {/*<User user={MyObject}/>*/}
        <User user ={arr[0]}/>

        <Prop name="hoorain"/>
        <Prop name=""/>
        <Prop/>
        <Style color="yellow">  
           <h3>hello childern</h3> 
        </Style> 

         <Style>  
          <h3>hello childern 2</h3> 
        </Style>
        </>
    )
}
// in style there is a direct jsx  so style component can access that throught childern

export default App
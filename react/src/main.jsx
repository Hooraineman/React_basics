import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Greeting(){
    return (
        <>
        <h2>its my second main function</h2>
        </>
    )
}
const variable= "myself hoorain eman "
// creating element thorught react 
const creatingElement = React.createElement(
    'a',
    //will take attribute in object
    {href:'https://www.google.com'},
    //will take text at last
    'visit google',
    //variable
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Greeting />
    {variable}
   {creatingElement}
    </>
)
// manifest.json file is for apps
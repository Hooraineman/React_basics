import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Components , {NextComp} from './Components.jsx'
import AboutState ,{Counter} from './state.jsx'
import User from './User.jsx'
import Prop from './Props_2'
import Style from './Styling'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Components />
    <NextComp />
    <AboutState />
    <Counter />
    <User />
    <Prop/>
    <Style/>
  </StrictMode>,
)

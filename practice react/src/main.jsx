import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Components , {NextComp} from './Components.jsx'
import AboutState ,{Counter} from './state.jsx'
import User from './props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Components />
    <NextComp />
    <AboutState />
    <Counter />
    <User />
  </StrictMode>,
)

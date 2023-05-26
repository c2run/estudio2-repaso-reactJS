import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'

import { HelloWorld } from './components/HelloWorld'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld user={'Jose'} id='1' />
  </React.StrictMode>,
)

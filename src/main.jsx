import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//const h1 = React.createElement('h1',null, React.createElement('ul', null, React.createElement('li', null, 'item 1')));
const h1 = <div><ul><li>Hola Mundo</li></ul></div>;
ReactDOM.createRoot(document.getElementById('root')).render(
  
  h1
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
)

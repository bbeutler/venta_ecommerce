import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'
import {Provider} from "react-redux"
import store from "./redux/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <BrowserRouter>
  <React.StrictMode>
 <App />
  </React.StrictMode>
  </BrowserRouter>
 </Provider>

)

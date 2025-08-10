import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux";
import {rtkstore} from "./store/Store.jsx"
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={rtkstore}>
    <App />
  </Provider>
  </BrowserRouter>
)

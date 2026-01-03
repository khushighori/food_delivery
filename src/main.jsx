import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontext from './Context/Usercontext.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Usercontext>
    <App />
    
  </Usercontext>
  </Provider>
)

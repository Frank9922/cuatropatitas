import React from 'react'
import ReactDOM from 'react-dom/client'
import { CuatroPatitas } from './CuatroPatitas.jsx'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CuatroPatitas />
    </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'

import './less/global.less'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

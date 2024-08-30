import ReactDOM from 'react-dom/client'
import App from './App'
import WebApp from '@twa-dev/sdk'
import React from 'react'

WebApp.ready()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
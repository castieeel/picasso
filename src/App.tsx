import React from 'react'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styled components/app.style'

export const App: React.FC = () => {
  return <div className="App">
    <GlobalStyle/>
    <AppRoutes/>
  </div>
}
